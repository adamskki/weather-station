import spidev
import time

spi = spidev.SpiDev()
spi.open(0,0)
spi.max_speed_hz=1000000

def ReadChannel(channel):
  adc = spi.xfer2([1,(8+channel)<<4,0])
  data = ((adc[1]&3) << 8) + adc[2]
  return data

def readSensorUV():
  numOfReadings = 3
  dataSensorUV = 0
  for i in range(numOfReadings):
    dataSensorUV += ReadChannel(0)
    time.sleep(0.2)
  dataSensorUV /= numOfReadings
  dataSensorUV = (dataSensorUV * (3.3 / 1023.0)) * 1000;
  return round(dataSensorUV)

print(readSensorUV())