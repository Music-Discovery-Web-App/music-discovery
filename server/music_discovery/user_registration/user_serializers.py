from rest_framework import serializers
from models import User_Registration


class UserSerializer(serializers.HyperLinkedModelSerializer):
    class Meta:
        model = User_Registration
        fields = ["user_id", "first_name", "last_name", "email", "password", "date_created"]