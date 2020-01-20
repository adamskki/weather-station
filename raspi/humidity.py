import Adafruit_DHT
import time
from mysql.connector import (connection)
from dotenv import load_dotenv, find_dotenv
import os

load_dotenv(find_dotenv())

PASSWORD = os.getenv("PASSWORD")

cnx = connection.MySQLConnection(user='raspi', password=PASSWORD,
                                 host='127.0.0.1',
                                 database='weather_station')
cur = cnx.cursor()

cur.execute("SHOW TABLES")
rows = cur.fetchall()
for row in rows:
    print(row)

DHT22Sensor = Adafruit_DHT.DHT22
DHTpin = 16

index = 0

while index<1:

    humDHT, tempDHT = Adafruit_DHT.read_retry(DHT22Sensor, DHTpin)
    if (humDHT is not None) and (tempDHT is not None):
        hum = round (humDHT,1)
        temp = round (tempDHT, 1)
    index = index + 1
    print(hum)
    cur.execute("INSERT INTO HumidityTable (humidity) VALUES (%f)" % hum)
    time.sleep(1)
cur.execute("commit")