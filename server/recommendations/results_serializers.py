from rest_framework import serializers
from recommendations.models import Recommendations

class ResultsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recommendations
        fields = ["result_id", "user", "search_text", "results"]
