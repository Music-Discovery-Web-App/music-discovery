from rest_framework import serializers
from models import UserRegistration


class UserSerializer(serializers.HyperLinkedModelSerializer):
    class Meta:
        model = UserRegistration
        fields = ["user_id", "first_name", "last_name", "email", "password", "date_created"]