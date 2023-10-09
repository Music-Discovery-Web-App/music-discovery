from rest_framework import serializers
from user_registration.models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'first_name', 'last_name', 'date_created') 

class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'password', 'first_name', 'last_name')

        extra_kwargs = {'password': {'write_only': True}}
