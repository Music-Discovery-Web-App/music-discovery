from django.urls import include, path
from rest_framework import routers
import views

router = routers.DefaultRouter()
router.register(r'results', views.ResultsViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]