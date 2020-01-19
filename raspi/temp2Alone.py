from w1thermsensor import W1ThermSensor
ds18b20Sensor = W1ThermSensor()
tempExt = round(ds18b20Sensor.get_temperature(), 1)
print('External Temperature = {}*C'.format(tempExt))