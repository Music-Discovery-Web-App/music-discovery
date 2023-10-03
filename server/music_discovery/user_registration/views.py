from rest_framework import viewsets
from rest_framework import permissions
from django.shortcuts import render, redirect
from user_registration.user_serializers import UserSerializer
from user_registration.models import user_registration

class UsersViewSet(viewsets.ModelViewSet):
    """
    API endpoint that retrieves all user IDs from the DB
    """
    queryset = user_registration.objects.all().order_by("user_id")
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated)

def signup(request):
    if request.method == 'POST':
        form = UserSerializer(request.POST)
        if form.is_valid():
            # Add hashing for password encryption
            form.save()
            return redirect('')  # Redirect to a success page
    else:
        form = UserSerializer()

    return render(request, 'signup.html', {'form': form})
