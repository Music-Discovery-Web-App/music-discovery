from django.db.models.fields import json
from django.http import HttpResponse
from django.http.response import JsonResponse
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.views import csrf_exempt
from .models import Recommendations
from recommendations.results_serializers import ResultsSerializer

from dotenv import load_dotenv
import os

load_dotenv()
SPOTIFY_CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID")
SPOTIFY_CLIENT_SECRET = os.getenv("SPOTIFY_CLIENT_SECRET")

# class ResultsViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows stored search results to be viewed
#     """
#     queryset = Recommendations.objects.all().order_by("date_created")
#     serializer_class = ResultsSerializer
#     permission_classes = (permissions.IsAuthenticated)

@csrf_exempt
def save_recommendations(request):
    if request.method == 'POST' and request.user.is_authenticated:
        data = json.loads(request.body)
        for item in data.get('recommendations', [])[:10]: 
            Recommendations.objects.create(
                track_name=item['track_name'],
                artist_name=item['artist_name'],
                spotify_track_id=item['spotify_track_id']
                # other fields??
            )
        return JsonResponse({'status': 'success'})
    return JsonResponse({'error': 'Invalid request or user not logged in'}, status=400)

def test(request):
    return HttpResponse(status=201)
