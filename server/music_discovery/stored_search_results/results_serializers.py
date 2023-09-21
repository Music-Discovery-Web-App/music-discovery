from rest_framework import serializers
from stored_search_results.models import StoredSearchResults

class ResultsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = StoredSearchResults
        fields = ["result_id", "user", "search_text", "date_created"]