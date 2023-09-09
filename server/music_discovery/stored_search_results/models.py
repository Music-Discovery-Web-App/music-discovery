from django.db import models
from user_registration.models import User_Registration

class Stored_Search_Results(models.Model):
    result_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User_Registration, on_delete=models.CASCADE)
    search_text = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)

    # might need to change this later based on what we want 
    def __str__(self):
        return f"Result ID: {self.result_id} for User: {self.user.first_name} {self.user.last_name}"