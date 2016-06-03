import mysql.connector

# def queryTest():
#     query = "SELECT * FROM TOURS"
# conn = ''
try:
    conn = mysql.connector.connect(host='localhost',database='adventuredb', user='root',password='root')
    if conn.is_connected():
        print 'connected'
        print conn

        # now = datetime.datetime(2009, 5, 5)

        #tourItems = ['start loc py test','end loc py test','"'+now+'"','"'+now+'"',666.66,'tour py desc',50,'cont','tour im link','map im']
        cursor = conn.cursor()

        cursor.execute('SELECT * FROM tours')
        rows = cursor.fetchall();
        for r in rows:
            print r




except Error as e:
    print # coding=utf-8
finally:
    conn.close()
