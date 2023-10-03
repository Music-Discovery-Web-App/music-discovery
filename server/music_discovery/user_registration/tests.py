# TODO: Figure out why the test case isn't working for creating a new user when the Django admin side works
# from django.test import TestCase
# from django.urls import reverse  # Import reverse function
# from user_registration.models import user_registration  # Use the correct model name
# from .views import signup
# from .user_serializers import UserSerializer  # Import the UserSerializer

# class UserRegistrationTestCases(TestCase):
#     def setUp(self):
#         # Create a user registration instance for testing
#         user_registration.objects.create(
#             first_name='Test1FirstName',
#             last_name='Test1LastName',
#             email='test1@test.com',
#             password='secret12345',
#         )

#     def test_user_registration_data_input(self):
#         data = {
#             'first_name': 'Test1FirstName',
#             'last_name': 'Test1LastName',
#             'email': 'test1@test.com',
#             'password': 'secret12345',
#         }
#         # Use reverse to get the URL for the 'signup' view
#         url = reverse('signup')
        
#         # Create an instance of the UserSerializer and pass the data
#         serializer = UserSerializer(data=data)
        
#         # Check if the serializer is valid
#         if not serializer.is_valid():
#             print(serializer.errors)

#         # Make a POST request using the test client
#         response = self.client.post(url, data)

#         # Check if the form submission was successful
#         self.assertEqual(response.status_code, 302)

#         # Verify that a user with the submitted data exists in the database
#         self.assertTrue(user_registration.objects.filter(email='test1@test.com').exists())

#         user = user_registration.objects.get(email='test1@test.com')
#         self.assertEqual(user.first_name, 'Test1FirstName')
#         self.assertEqual(user.last_name, 'Test1LastName')