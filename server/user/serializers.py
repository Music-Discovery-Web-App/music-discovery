from rest_framework import serializers
from user.models import CustomUser

# Used for Login
class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'first_name', 'last_name', 'is_staff', 'is_superuser', 'date_created') 

# Used for Registration
class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'first_name', 'last_name', 'password', 'is_staff', 'is_superuser')
        extra_kwargs = {
            'password': {'write_only': True},
            'is_staff': {'read_only': True},
            'is_superuser': {'read_only': True}
        }

    def create(self,validated_data):
            user = CustomUser.objects.create_user(validated_data['email'], validated_data['first_name'], validated_data['last_name'], validated_data['password'])

            return user
