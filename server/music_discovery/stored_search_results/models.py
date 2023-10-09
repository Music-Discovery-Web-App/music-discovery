# from django.db import models
# from user_registration.models import user_registration

# class stored_search_results(models.Model):
#     result_id = models.AutoField(primary_key=True)
#     user = models.ForeignKey(user_registration, on_delete=models.CASCADE)
#     search_text = models.TextField()
#     date_created = models.DateTimeField(auto_now_add=True)

#     # might need to change this later based on what we want 
#     def __str__(self):
#         return f"Result ID: {self.result_id} for User: {self.user.first_name} {self.user.last_name}"
    