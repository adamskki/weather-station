# import spidev
# import time
#
# spi = spidev.SpiDev()
# spi.open(0,0)
# spi.max_speed_hz=1000000
#
# def ReadChannel(channel):
#   adc = spi.xfer2([1,(8+channel)<<4,0])
#   data = ((adc[1]&3) << 8) + adc[2]
#   return data
#
# def readSensorUV():
#   numOfReadings = 3
#   dataSensorUV = 0
#   for i in range(numOfReadings):
#     dataSensorUV += ReadChannel(0)
#     time.sleep(0.2)
#   dataSensorUV /= numOfReadings
#   dataSensorUV = (dataSensorUV * (3.3 / 1023.0)) * 1000;
#   return round(dataSensorUV)
#
# def indexCalculate(dataSensorUV):
#   if dataSensorUV < 227:
#     indexUV = 0
#   elif (227 <= dataSensorUV) & (dataSensorUV < 318):
#     indexUV = 1
#   elif (318 <= dataSensorUV) & (dataSensorUV < 408):
#     indexUV = 2
#   elif (408 <= dataSensorUV) & (dataSensorUV < 503):
#     indexUV = 3
#   elif (503 <= dataSensorUV) & (dataSensorUV < 606):
#     indexUV = 4
#   elif (606 <= dataSensorUV) & (dataSensorUV < 696):
#     indexUV = 5
#   elif (696 <= dataSensorUV) & (dataSensorUV < 795):
#     indexUV = 6
#   elif (795 <= dataSensorUV) & (dataSensorUV < 881):
#     indexUV = 7
#   elif (881 <= dataSensorUV) & (dataSensorUV < 976):
#     indexUV = 8
#   elif (976 <= dataSensorUV) & (dataSensorUV < 1079):
#     indexUV = 9
#   elif (1079 <= dataSensorUV) & (dataSensorUV < 1170):
#     indexUV = 10
#   else:
#     indexUV = 11
#   return indexUV
#
# UV_mV = readSensorUV()
# UV_index = indexCalculate(UV_mV)
# print(UV_index)


import spidev
import time

spi = spidev.SpiDev()
spi.open(0,0)
spi.max_speed_hz = 1000000

def ReadChannel(channel):
  adc = spi.xfer2([1,(8+channel)<<4,0])
  data = ((adc[1]&3) << 8) + adc[2]
  return data

print(ReadChannel(0))




