import Adafruit_DHT
import time
from mysql.connector import (connection)
from dotenv import load_dotenv, find_dotenv
import os
from w1thermsensor import W1ThermSensor


load_dotenv(find_dotenv())

PASSWORD = os.getenv("PASSWORD")

cnx = connection.MySQLConnection(user='raspi', password=PASSWORD,
                                 host='127.0.0.1',
                                 database='weather_station')
cur = cnx.cursor()

index = 0



while index<40:
    ds18b20Sensor = W1ThermSensor()
    tempExt = round(ds18b20Sensor.get_temperature(), 1)
    print('External Temperature = {}*C'.format(tempExt))
    index = index + 1
    print(tempExt)
    cur.execute("INSERT INTO TemperatureTable (temperature) VALUES (%f)" % tempExt)
    time.sleep(1)
cur.execute("commit")