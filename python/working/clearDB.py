import mysql.connector
import datetime
import getAPI
import string
from gapipy import Client


def clearDB():

    dailyIteneraryItems = []
    try:
        conn = mysql.connector.connect(host='localhost',database='adventuredb',user='root',password='root')
        if conn.is_connected():
            print 'connected\n\n\n\n'
            # print conn

            clearBookingsQuery = ' DELETE FROM bookings WHERE booking_id = booking_id;'
            clearTourQuery = ' DELETE FROM tours WHERE id = id;'
            clearItenQuery = ' DELETE FROM itinerary WHERE id = id;'
            cursor = conn.cursor()
            cursor.execute(clearBookingsQuery);

            cursor.execute(clearItenQuery);
            cursor.execute(clearTourQuery);

            conn.commit()

    except mysql.connector.Error as e:
        print e
    finally:
        conn.close()
    for item in dailyIteneraryItems:
        for element in item:
            print element

clearDB()
