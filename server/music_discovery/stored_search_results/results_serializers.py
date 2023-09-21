from rest_framework import serializers
from stored_search_results.models import Stored_Search_Results

class ResultsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Stored_Search_Results
        fields = ["result_id", "user", "search_text", "date_created"]