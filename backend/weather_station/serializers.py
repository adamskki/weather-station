from rest_framework import serializers

from .models import *


class HumiditySerializer(serializers.ModelSerializer):
    class Meta:
        model = Humiditytable
        fields = "__all__"


class TemperatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Temperature
        fields = "__all__"




