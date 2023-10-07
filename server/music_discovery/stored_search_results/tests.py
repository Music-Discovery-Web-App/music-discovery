from django.test import TestCase
from django.utils import timezone
from user_registration.models import user_registration
from stored_search_results.models import stored_search_results

# models tests #

# Test Case: Creates a new user with validated values that is used
# to test the creation of a stored search result with validated values.
# This will test whether or not the stored_search_results model can 
# create and store an index successfully.
class StoredSearchResultsModelTest(TestCase):

    def create_user(self, first_name="Jane", last_name="Doe", email="jane@doe.com", password="jane12345"):
        return user_registration.objects.create(first_name=first_name, last_name=last_name, email=email, password=password, date_created=timezone.now())

    def create_search_result(self, user=None, search_text="Sample Search Text"):
        if user is None:
            user = self.create_user()
        return stored_search_results.objects.create(user=user, search_text=search_text, date_created=timezone.now())

    def test_search_result_creation(self):
        user = self.create_user()
        search_result = self.create_search_result(user=user, search_text="Test Search")
        
        self.assertTrue(isinstance(search_result, stored_search_results))
        expected_str = f"Result ID: {search_result.result_id} for User: {user.first_name} {user.last_name}"
        self.assertEqual(str(search_result), expected_str, f"The string representation should be '{expected_str}'")
