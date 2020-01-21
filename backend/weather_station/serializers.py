from rest_framework import serializers

from .models import *


class HumiditySerializer(serializers.ModelSerializer):
    class Meta:
        model = Humiditytable
        fields = "__all__"


class TemperatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Temperaturetable
        fields = "__all__"


class PressureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pressuretable
        fields = "__all__"





