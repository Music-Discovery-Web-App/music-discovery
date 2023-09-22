from rest_framework import viewsets
from rest_framework import permissions
from stored_search_results.results_serializers import ResultsSerializer
from stored_search_results.models import StoredSearchResults

class ResultsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows stored search results to be viewed
    """
    queryset = StoredSearchResults.objects.all().order_by("date_created")
    serializer_class = ResultsSerializer
    permission_classes = (permissions.IsAuthenticated)