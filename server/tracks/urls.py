from django.urls import path
from tracks.views import get_token, get_song

urlpatterns = [
    path("get_token", get_token, name="get_token"),
    path("search/", get_song, name="get_song"),
]
