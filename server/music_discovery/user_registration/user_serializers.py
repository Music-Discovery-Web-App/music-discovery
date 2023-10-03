from rest_framework import serializers
from user_registration.models import user_registration

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = user_registration
        fields = ["first_name", "last_name", "email", "password"]
