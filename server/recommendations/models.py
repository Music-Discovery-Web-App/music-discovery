from django.db import models
from django.contrib.auth.models import User


class Recommendations(models.Model):
    id = models.AutoField(primary_key=True)
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    search_title = models.CharField(max_length=50)
    date_created = models.DateTimeField(auto_now_add=True)
    recommendations = models.JSONField()
    
    def __str__(self):
        return f"Result ID: {self.result_id}"
    
    # def __str__(self):
    #     return f"Result ID: {self.result_id} for User: {self.user.first_name} {self.user.last_name}"
    