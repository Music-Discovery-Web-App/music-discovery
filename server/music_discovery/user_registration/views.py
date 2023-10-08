from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from user_registration.serializers import UserRegistrationSerializer
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = authenticate(request, email=email, password=password)
    if user is not None:
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})
    return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

@csrf_exempt
@api_view(['POST'])
def registration(request):
    serializer = UserRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# from rest_framework import viewsets
# from rest_framework import permissions
# from django.shortcuts import render, redirect
# from server.music_discovery.user_registration.serializers import UserRegistrationSerializer
# from user_registration.models import user_registration

# class UsersViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that retrieves all user IDs from the DB
#     """
#     queryset = user_registration.objects.all().order_by("user_id")
#     serializer_class = UserRegistrationSerializer
#     permission_classes = (permissions.IsAuthenticated)

# def registration(request):
#     if request.method == 'POST':
#         form = UserRegistrationSerializer(request.POST)
#         if form.is_valid():
#             # Add hashing for password encryption
#             form.save()
#             return redirect('')  # Redirect to a success page
#     else:
#         form = UserRegistrationSerializer()

#     return render(request, 'registration.html', {'form': form})
