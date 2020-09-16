from rest_framework import routers
from .api import CandidateViewSet

router = routers.DefaultRouter()
router.register('api/candidates', CandidateViewSet, 'candidates')

urlpatterns = router.urls
