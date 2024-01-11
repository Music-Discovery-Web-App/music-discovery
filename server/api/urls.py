from django.urls import include, path
from rest_framework import routers
from .views import get_token, get_song, get_recommendations

router = routers.DefaultRouter()
# router.register(r'results', views.ResultsViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path("get_token/", get_token, name="get_token"),
    path("get_song/<str:song_name>", get_song, name="get_song"),
    path("get_recommendations/", get_recommendations, name="get_recommendations")
    # path("test/", views.test, name="test")
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # path("recommendations/save/", views.save_recommendations, name="save_recommendations")
]
