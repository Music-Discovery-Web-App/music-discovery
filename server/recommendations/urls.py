from django.urls import include, path
from rest_framework import routers
from recommendations.views import save_recommendations

router = routers.DefaultRouter()
# router.register(r'results', views.ResultsViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # path("test/", views.test, name="test"),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path("recommendations/save/", save_recommendations, name="save_recommendations")
]
