import mysql.connector
import datetime
import getAPI
import string
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
                print tourId[0]

                ######start itenerary id
                iteneraryId =  gapi.tour_dossiers.get(tourId[0]).structured_itineraries[0].id
                daysArray =  gapi.itineraries.get(iteneraryId).days

                for dayObject in daysArray:
                    #AKA FOR EACH ITIN ITEM
                    singleDayItenerary = []
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
                            # print "Original string was not unicode."
                            summaryString = summaryUnicode

                        ####
                    summaryString = string.replace(summaryString,"'",'"')
                    singleDayItenerary = [tourId[0],dayNumber,summaryString]
                    ####
            ####|each day object
            ##start itenerary id
                    dailyIteneraryItems.append(singleDayItenerary);

                    # for item in singleDayItenerary:
                        # print 'wow' + str(item)
                    ###at this indent, execute a statement that pushes the daly itenerary to the db
                    itenerarySubmitQuery = 'INSERT INTO itinerary (`day`,`description`,`tour_id`) VALUES (  \'' + str(singleDayItenerary[1]) + '\',\'' + singleDayItenerary[2] + '\',\'' + str(singleDayItenerary[0]) + '\');'
                    # print 'sql'
                    # print itenerarySubmitQuery
                    # print'\n'
                    cursor.execute(itenerarySubmitQuery)

            conn.commit()

    except mysql.connector.Error as e:
        print '#$%^R*&(^%$##$%^R*&&*%$#&*$&*   oh no. sql error. #$%^R*$%^R*&(^%$#&*$&*'
    finally:
        conn.close()
    for item in dailyIteneraryItems:
        for element in item:
            print element
pupulateIteneraryItems()
