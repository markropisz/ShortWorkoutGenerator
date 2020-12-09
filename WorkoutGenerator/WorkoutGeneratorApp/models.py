from django.db import models

class Movement(models.Model):
    movement_name     = models.CharField(max_length=40)
    first_variation  = models.CharField(max_length=40)
    second_variation = models.CharField(max_length=40)
    third_variation  = models.CharField(max_length=40)

# Create your models here.
