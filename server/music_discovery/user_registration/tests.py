from django.test import TestCase
from django.utils import timezone
from user_registration.models import user_registration 
from user_registration.user_serializers import UserSerializer

# models test
class UserRegistrationModelTest(TestCase):

    def create_user(self, first_name="Jane", last_name="Doe", email="jane@doe.com", password="jane12345"):
        return user_registration.objects.create(first_name=first_name, last_name=last_name, email=email, password=password, date_created=timezone.now())

    def test_user_creation(self):
        w = self.create_user()
        self.assertTrue(isinstance(w, user_registration))
        self.assertEqual(w.__str__(), f"{w.first_name} {w.last_name}", f"The string representation should be '{w.first_name} {w.last_name}'")
