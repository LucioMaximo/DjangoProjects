from django.db import models
from django.contrib.auth.models import User


class Candidates(models.Model):
    name = models.CharField(max_length=90)
    email = models.EmailField(max_length=90, unique=True)

    description = models.CharField(max_length=500, blank=True)
    assignedto = models.ForeignKey(
        User, related_name="candidates", on_delete=models.CASCADE, null=True
    )
    date = models.DateTimeField(auto_now_add=True)
