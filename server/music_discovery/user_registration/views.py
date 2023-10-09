from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from user_registration.serializers import UserRegistrationSerializer, CustomUserSerializer
from user_registration.models import CustomUser
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@api_view(['POST'])
def registration(request):
    serializer = UserRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()  
        return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = CustomUser.objects.get_user_by_email(email)

    if user is not None and user.check_password(password):
        serializer = CustomUserSerializer(user) 
        return Response(serializer.data)
    return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
