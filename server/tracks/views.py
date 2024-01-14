# from django.shortcuts import render

# import requests, os
# from django.http import JsonResponse
# from dotenv import load_dotenv


# load_dotenv()

# SPOTIFY_CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID")
# SPOTIFY_CLIENT_SECRET = os.getenv("SPOTIFY_CLIENT_SECRET")

# def get_token():
#     url = "https://accounts.spotify.com/api/token"
#     headers = {
#         "Content-Type": "application/x-www-form-urlencoded"
#     }
#     payload = {
#         "grant_type": "client_credentials"
#     }
#     response = requests.post(url, headers=headers, data=payload, auth=(SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET))
#     if response.status_code == 200:
#         return JsonResponse(response.json())
#     else:
#         return JsonResponse({"error": "Failed to fetch Spotify token"}, status=500)
    
# def get_song(request):
#     url = "https://api.spotify.com/v1/search"
#     headers = {
#         "Content-Type": "application/json"
#     }
#     payload = {
#         "grant_type": "client_credentials"
#     }

#     response = requests.get(url, headers=headers, data=payload)
#     if response.status_code == 200:
#         return JsonResponse(response.json())
#     else:
#         return JsonResponse({"error": "failed to fetch song"})

# def get_recommendations(request):
#     seed_tracks = request.GET.get("seed_tracks")
#     token = request.headers.get("Authorization")

#     if not token or not seed_tracks:
#         return JsonResponse({"error": "Token and seed song required"})
    
#     url = "https://api.spotify.com/v1/recommendation"
#     headers = {
#         "Authorization": token
#     }
#     params = {
#         "seed_tracks": seed_tracks
#     }

#     response = requests.get(url, headers=headers, params=params)

#     if response.status_code ==200:
#         return JsonResponse(response.json())
#     else:
#         return JsonResponse({"error": "Fetching recommendations failed"})
