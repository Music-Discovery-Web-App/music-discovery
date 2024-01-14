from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from urllib.parse import quote
import logging
from tracks.models import Tracks
import time
import requests, os
from django.http import JsonResponse
from dotenv import load_dotenv


load_dotenv()

SPOTIFY_CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID")
SPOTIFY_CLIENT_SECRET = os.getenv("SPOTIFY_CLIENT_SECRET")
TOKEN_INFO = {
    "access_token": None,
    "expires_in": None
}
@csrf_exempt
def get_token(request):
    current_time = time.time()
    if TOKEN_INFO["access_token"] is None or current_time > TOKEN_INFO["expires_in"]:
        response = requests.post('https://accounts.spotify.com/api/token', data={
            'grant_type': 'client_credentials',
            'client_id': SPOTIFY_CLIENT_ID,
            'client_secret': SPOTIFY_CLIENT_SECRET,
        })

        if response.status_code == 200:
            token_data = response.json()
            TOKEN_INFO["access_token"] = token_data["access_token"]
            TOKEN_INFO["expires_in"] = current_time + token_data["expires_in"]
            print(token_data)
            return JsonResponse({"access_token": token_data["access_token"]})
        else:
            return JsonResponse({"error": "Failed to fetch token"})
    else:
        return JsonResponse({'access_token': TOKEN_INFO['access_token']})
    

@csrf_exempt
def get_song(request, song_name):
    print("request", request)
    print(song_name)
    token = request.headers.get("Authorization")
    if not token:
        return JsonResponse({"error": "No token provided"}, status=401)
    encoded_song = quote(song_name)


    search_query = f"track:{encoded_song}"
    search_type = 'track'  # can also do artist or album but we do that later
    url = f"https://api.spotify.com/v1/search?q={search_query}&type={search_type}"

    
    headers = {
        "Content-Type": "application/json",
        "Authorization": token
    }

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        response_data = response.json()

        tracks = response_data.get("tracks", {}).get("items", [])
        if tracks:
            first_track = tracks[0]

            song_data = {
                'name': first_track['name'],
                'artist': ', '.join(artist['name'] for artist in first_track['artists']),
                'album': first_track['album']['name'],
                'spotify_url': first_track['external_urls']['spotify'],
                'spotify_id': first_track['id']
            }
        
        # just getting first track for now, can scale up later with top 3?
            
        Tracks.objects.get_or_create(
            spotify_id=song_data["spotify_id"],
            defaults=song_data)
        print(song_data)
        return JsonResponse(song_data)
    else:
        return JsonResponse({"error": "Failed to fetch song", "status_code": response.status_code, "spotify_response": response.json()})

def get_recommendations(request):
    logging.basicConfig(level=logging.DEBUG)
    seed_tracks = request.GET.get("seed_tracks")
    token = request.headers.get("Authorization")

    if not token or not seed_tracks:
        return JsonResponse({"error": "Token and seed song required"})
    
    url = "https://api.spotify.com/v1/recommendations"
    headers = {
        "Authorization": token
    }
    params = {
        "seed_tracks": seed_tracks,
        "limit": 10
    }

    response = requests.get(url, headers=headers, params=params)

    if response.status_code ==200:
        data = response.json()
        recommendations = data.get("tracks", [])
        print("number of recommendations received:", len(recommendations))
        parsed = []
        for track in recommendations[:10]:
            results_data = {
                'id': track['id'],
                'title': track['name'],
                'artist': ', '.join(artist['name'] for artist in track['artists']),
                'album': track['album']['name']
            }

            parsed.append(results_data)
        print(results_data)
        return JsonResponse({"Recommendations": parsed})
    else:
        return JsonResponse({"error": "Fetching recommendations failed"})
