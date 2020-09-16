from rest_framework import serializers
from .models import Candidates

# Candidate Serializer


class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidates
        fields = "__all__"
