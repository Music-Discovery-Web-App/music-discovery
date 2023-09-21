from rest_framework import serializers
from user_registration.models import UserRegistration

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserRegistration
        fields = ["user_id", "first_name", "last_name", "email", "password", "date_created"]
