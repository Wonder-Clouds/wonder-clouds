from django.db import models
from safedelete.models import SafeDeleteModel, SOFT_DELETE
import uuid

from client.models import Client

# Create your models here.
class Appointment(SafeDeleteModel):
    _safedelete_policy = SOFT_DELETE

    STATUS_CHOICES = [('PN', 'pending'), ('CF','confirmed'), ('FN','finish'), ('NT', 'Nothing')]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    date = models.DateField()
    time = models.TimeField()
    end_time = models.DateTimeField()
    status = models.CharField(choices=STATUS_CHOICES)
    subject = models.CharField(max_length=100, editable=False)
    detail = models.TextField()

    # Relations
    client = models.ForeignKey(Client, related_name='client', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.status} {self.subject}'
    
