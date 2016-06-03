import mysql.connector
import datetime
import getAPI
from gapipy import Client

APIKEY = 'live_ba297406f66b04879ccb159952ab1ee3d3726002'

gapi = Client(application_key=APIKEY)

def pupulateIteneraryItems():

    dailyIteneraryItems = []
    try:
        conn = mysql.connector.connect(host='localhost',database='adventuredb',user='root',password='root')
        if conn.is_connected():
            print 'connected\n\n\n\n'
            # print conn
            tourId = 0;

            tourIdQuery = 'SELECT id FROM tours'
            cursor = conn.cursor()
            cursor.execute(tourIdQuery)
            tourIdList = cursor.fetchall();

            print tourIdList

            for tourId in tourIdList:
                # print tourId
                # print tourId[0]

                ######start itenerary id
                iteneraryId =  gapi.tour_dossiers.get(23000).structured_itineraries[0].id
                daysArray =  gapi.itineraries.get(iteneraryId).days
                singleDayItenerary = []
                for dayObject in daysArray:
                    #AKA FOR EACH ITIN ITEM
                    # print "=-=-=-=newday=-=-=-="
                    dayNumber = dayObject.day
                    #rec day to database as DAY
                    summaryString = ''
                    for component in dayObject.components:
                        #USE THE LONGEST DESCRIPTION
                        #(might be redundant since we are doing per day)
                        # print str(dayNumber) + " " + component.summary
                        summaryUnicode =  component.summary

                        try:
                            summaryString += summaryUnicode.decode("utf-8")
                            # print len(unicode_string)
                        except UnicodeEncodeError:
                                print "python made a mistake"

                        ####

                    singleDayItenerary = [tourId[0],dayNumber,summaryString]
                    ####
            ######start itenerary id
                    dailyIteneraryItems.append(singleDayItenerary);



            conn.commit()

    except mysql.connector.Error as e:
        print '#$%^R*&(^%$##$%^R*&&*%$#&*$&*   oh no. sql error. #$%^R*$%^R*&(^%$#&*$&*'
    finally:
        conn.close()
    for item in dailyIteneraryItems:
        for element in item:
            print element
pupulateIteneraryItems()
