from rest_framework import viewsets
from rest_framework import permissions
from results_serializers import ResultsSerializer
from models import Stored_Search_Results

class ResultsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows stored search results to be viewed
    """
    queryset = Stored_Search_Results.objects.all().order_by("date_created").desc()
    serializer_class = ResultsSerializer
    permission_classes = (permissions.IsAuthenticated)