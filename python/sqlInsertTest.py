import mysql.connector
import datetime

# def queryTest():
#     query = "SELECT * FROM TOURS"
# conn = ''
try:
    conn = mysql.connector.connect(host='localhost',database='adventuredb',user='root',password='root')
    if conn.is_connected():
        print 'connected'
        print conn

        now = datetime.datetime(2017, 5, 5)
        #
        tourItems = ['this is a test location','enddsfdsfasdf loc py test',now.strftime('%Y-%m-%d'),now.strftime('%Y-%m-%d'),666.66,'tour py dessdfsdc',50,'name''cont','tour im link','map im']

        statement = 'INSERT INTO `adventuredb`.`tours` (`start_location`, `end_location`, `start_date`, `end_date`, `cost`, `tour_description`, `num_avail`, `tour_name`, `continent`, `tour_image`, `map_image`) VALUES (\''+tourItems[0]+'\', \''+tourItems[1]+'\', \''+tourItems[2]+'\', \''+tourItems[3]+'\', \''+str(tourItems[4])+'\', \''+tourItems[5]+'\' , \''+str(tourItems[6])+'\' , \''+tourItems[7]+'\' , \''+tourItems[8]+'\' , \''+tourItems[9]+'\' , \''+tourItems[9]+'\' );'
        print statement;
        #
        cursor = conn.cursor()
        #
        cursor.execute(statement)
        # rows = cursor.fetchall();
        # for r in rows:
        #     print r

        conn.commit()


except mysql.connector.Error:
    print '#$%^R*&(^%$##$%^R*&&*%$#&*$&*   oh no. sql error. #$%^R*$%^R*&(^%$#&*$&*'# coding=utf-8
finally:
    conn.close()
