import mysql.connector
import datetime
import getAPI
import random

START_TOUR_ID = 23000;
NUMBER_OF_TOURS = 50;


def persistTours(startId,numberOfTours):
    try:
        conn = mysql.connector.connect(host='localhost',database='adventuredb',user='root',password='root')
        if conn.is_connected():
            print 'connected'
            # print conn
            tourId = 0;

            for increment in range(0,numberOfTours):
                tourId = startId + increment

                # now = datetime.datetime(2017, 5, 5)
                #
                try:
                    tourItems = getAPI.getTour(tourId)
                except Exception as e:
                    print e

                try:
                    tourItems[5] = random.randrange(150000,1500000,1)/100.00
                    print 'price' + str(tourItems[5])
                    statement = 'INSERT INTO `adventuredb`.`tours` (`id`,`start_location`, `end_location`, `start_date`, `end_date`, `cost`, `tour_description`, `num_avail`, `tour_name`, `continent`, `tour_image`, `map_image`) VALUES (\''+str(tourItems[0])+'\',\''+tourItems[1]+'\', \''+tourItems[2]+'\', \''+tourItems[3]+'\', \''+tourItems[4]+'\', \''+str(tourItems[5])+'\', \''+tourItems[6]+'\' , \''+str(tourItems[7])+'\' , \''+tourItems[8]+'\' , \''+tourItems[9]+'\' , \''+tourItems[10]+'\' , \''+tourItems[11]+'\' );'

                    # print statement

                    cursor = conn.cursor()

                    cursor.execute(statement)
                except Exception as e:
                    print e

            # rows = cursor.fetchall();
            # for r in rows:
            #     print r

            conn.commit()


    except mysql.connector.Error:
        print '#$%^R*&(^%$##$%^R*&&*%$#&*$&*   oh no. sql error. #$%^R*$%^R*&(^%$#&*$&*'# coding=utf-8
    finally:
        conn.close()


persistTours(START_TOUR_ID,NUMBER_OF_TOURS)
