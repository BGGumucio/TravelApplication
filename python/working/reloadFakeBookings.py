

import mysql.connector
import datetime
import getAPI
import string
from gapipy import Client


def loadTestBookings():

    dailyIteneraryItems = []
    try:
        conn = mysql.connector.connect(host='localhost',database='adventuredb',user='root',password='root')
        if conn.is_connected():
            print 'connected\n\n\n\n'
            # print conn

            resetBookings = "INSERT INTO `bookings` (`user_username`, `tour_id`, `paid_status`, `date_of_booking`) VALUES            ( 'test@test.com', 23010, 'PAID', '2016-06-06'),('test@test.com', 23010, NULL, NULL),('test2@test.com', 23010, NULL, NULL),( 'test@test.com', 23003, NULL, '2016-06-07'),( 'test@test.com', 23477, NULL, '2016-06-07'),( 'test@test.com', 23000, 'PAID', '2016-06-07'),( 'test@test.com', 23023, 'PAID', '2016-06-07'),         ( 'test@test.com', 23000, 'PAID', '2016-06-07');"
            cursor = conn.cursor()
            cursor.execute(resetBookings);

            conn.commit()

    except mysql.connector.Error as e:
        print e
    finally:
        conn.close()
    for item in dailyIteneraryItems:
        for element in item:
            print element

loadTestBookings()
