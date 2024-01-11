from django.test import TestCase
from django.utils import timezone
from user.models import CustomUser

# models tests #

# Test Case: Creates a new user with validated values.
# This will test whether or not the user_registration model can 
# create and store an index successfully.
class CustomUserModelTest(TestCase):

    def create_user(self, first_name="Jane", last_name="Doe", email="jane@doe.com", password="jane12345"):
        return CustomUser.objects.create(first_name=first_name, last_name=last_name, email=email, password=password, date_created=timezone.now())

    def test_user_creation(self):
        user = self.create_user()
        self.assertTrue(isinstance(user, CustomUser))
        self.assertEqual(str(user), f"{user.email}", f"The string representation should be '{user.email}'")
