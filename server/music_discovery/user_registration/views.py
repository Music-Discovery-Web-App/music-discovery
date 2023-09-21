from rest_framework import viewsets
from rest_framework import permissions
from user_serializers import UserSerializer
from models import User_Registration

class UsersViewSet(viewsets.ModelViewSet):
    """
    API endpoint that retrieves all user IDs from the DB
    """
    queryset = User_Registration.objects.all().order_by("user_id")
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated)