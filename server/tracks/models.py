from django.db import models

class Tracks(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    artists = models.CharField(max_length=200)
    album = models.CharField(max_length=100)
    spotify_url = models.CharField(max_length=200)
    spotify_id = models.CharField(max_length=200)


    def __str__(self):
        return f"Result"
