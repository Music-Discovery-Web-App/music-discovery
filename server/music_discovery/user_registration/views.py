from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from user_registration.serializers import UserRegistrationSerializer, CustomUserSerializer
from user_registration.models import CustomUser
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token

@csrf_exempt
@api_view(['POST'])
def registration(request):
    serializer = UserRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()  
        return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = CustomUser.objects.get_user_by_email(email)

    if user is not None and user.check_password(password):
        serializer = CustomUserSerializer(user) 
        return Response(serializer.data)
    return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

@csrf_exempt
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout(request):

    try:
        token = Token.objects.get(user=request.user)
    except Token.DoesNotExist:
        return Response({'detail': 'Token not found'}, status=status.HTTP_400_BAD_REQUEST)

    token.delete()

    return Response({'detail': 'Logged out successfully'}, status=status.HTTP_200_OK)
