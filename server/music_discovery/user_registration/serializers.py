from rest_framework import serializers
from user_registration.models import user_registration

class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = user_registration
        fields = '__all__'
