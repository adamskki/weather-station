from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *



class HumidityAPI(viewsets.ModelViewSet):
    serializer_class = HumiditySerializer
    queryset = Humiditytable.objects.all().values('humidity')


class TemperatureAPI(viewsets.ModelViewSet):
    serializer_class = TemperatureSerializer
    queryset = Temperaturetable.objects.all().values('temperature')


class PressureAPI(viewsets.ModelViewSet):
    serializer_class = PressureSerializer
    queryset = Pressuretable.objects.all().values('pressure')

