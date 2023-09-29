from rest_framework import viewsets
from rest_framework import permissions
from django.shortcuts import render, redirect
from user_registration.user_serializers import UserSerializer
from user_registration.models import UserRegistration

class UsersViewSet(viewsets.ModelViewSet):
    """
    API endpoint that retrieves all user IDs from the DB
    """
    queryset = UserRegistration.objects.all().order_by("user_id")
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated)

def signup(request):
    if request.method == 'POST':
        form = UserSerializer(request.POST)
        if form.is_valid():
            # Note: In a real application, you should hash the password before saving.
            form.save()
            return redirect('signup_success')  # Redirect to a success page
    else:
        form = UserSerializer()

    return render(request, 'signup.html', {'form': form})