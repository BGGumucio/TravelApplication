import mysql.connector
import datetime
import getAPI
import string
from gapipy import Client

APIKEY = 'live_ba297406f66b04879ccb159952ab1ee3d3726002'

gapi = Client(application_key=APIKEY)

def updateTourDates(newStartDate,tourId):
    count = 0;
    try:
        conn = mysql.connector.connect(host='localhost',database='adventuredb',user='root',password='root')
        if conn.is_connected():
            cursor = conn.cursor()
            updateDatesQuery = 'UPDATE tours SET start_date = \''+newStartDate.strftime('%Y-%m-%d')+'\' WHERE id = '+str(tourId)+';'
            print updateDatesQuery
            cursor.execute(updateDatesQuery)
            conn.commit()
            print "updated date"
    except mysql.connector.Error as e:
        print '#$%^R*&(^%$##$%^R*&&*%$#&*$&*   oh no. sql error. #$%^R*$%^R*&(^%$#&*$&*'
    finally:
        conn.close()


def getNumberOfDays(tourId):
    count = 0;
    try:
        conn = mysql.connector.connect(host='localhost',database='adventuredb',user='root',password='root')
        if conn.is_connected():
            cursor = conn.cursor()
            print 'connected\n\n\n\n'

            itenQuery = 'SELECT id FROM itinerary WHERE tour_id = ' + str(tourId) + ';'
            print itenQuery
            cursor.execute(itenQuery)
            itenDataList = cursor.fetchall()

            for x in itenDataList:
                count += 1
            print count

            conn.commit()
    except mysql.connector.Error as e:
        print '#$%^R*&(^%$##$%^R*&&*%$#&*$&*   oh no. sql error. #$%^R*$%^R*&(^%$#&*$&*'
    finally:
        conn.close()
    return count



def fixDates():

    dailyIteneraryItems = []
    try:
        conn = mysql.connector.connect(host='localhost',database='adventuredb',user='root',password='root')
        if conn.is_connected():
            cursor = conn.cursor()
            print 'connected\n\n\n\n'


            tourQuery = 'SELECT id,start_date, end_date FROM tours'

            cursor.execute(tourQuery)
            tourInfoList = cursor.fetchall()

            for results in tourInfoList:
                tourId = results[0]
                endDate = results[2];



                numberOfDaysInTour = getNumberOfDays(tourId)

                startDate = endDate - datetime.timedelta(days=numberOfDaysInTour)
                newStartDate = datetime.date(startDate.year,startDate.month,startDate.day)
                print str(tourId) + " start:"+ str(newStartDate) + " end:" + str(endDate)


                # print updateDatesQuery
                updateTourDates(newStartDate,tourId)

            conn.commit()

    except mysql.connector.Error as e:
        print '#$%^R*&(^%$##$%^R*&&*%$#&*$&*   oh no. sql error. #$%^R*$%^R*&(^%$#&*$&*'
    finally:
        conn.close()



fixDates()
