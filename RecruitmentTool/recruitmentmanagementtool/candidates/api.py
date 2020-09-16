from .models import Candidates
from rest_framework import viewsets, permissions
from .serializers import CandidateSerializer

# Candidate Viewset


class CandidateViewSet(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = CandidateSerializer

    def get_queryset(self):
        return self.request.user.candidates.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)  


