from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *


class HumidityAPI(viewsets.ModelViewSet):
    serializer_class = HumiditySerializer
    queryset = Humiditytable.objects.all()[:20]

class TemperatureAPI(viewsets.ModelViewSet):
    serializer_class = TemperatureSerializer
    queryset = Temperaturetable.objects.all()[:20]