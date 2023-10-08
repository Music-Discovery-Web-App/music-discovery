from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
#router.register(r'users', views.UsersViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('registration/', views.registration, name='registration'),
    path('login/', views.login, name='login'),
    # path('logout/', views.logout, name='logout'),
    # path('user/', views.user, name='user'),
]
