
######this is for the TOOOUURRRR thing

from gapipy import Client
import datetime
import string

APIKEY = 'live_ba297406f66b04879ccb159952ab1ee3d3726002'
gapi = Client(application_key=APIKEY)

def getTour(tourId):
    try:

        print 'getting tour id: ' + str(tourId)
        iteneraryId =  gapi.tour_dossiers.get(tourId).structured_itineraries[0].id
        tourDossier = gapi.tour_dossiers.get(tourId)
        name =  tourDossier.name
        description = tourDossier.description
        geo = tourDossier.geography
        startCity =  geo.values()[0].values()[0]
        startCountry = geo.values()[1].values()[2]
        startLocation =  startCity + ", " + startCountry
        endCountry = geo.values()[4].values()[2]
        endCity = geo.values()[6].values()[0]
        endLocation = endCity + ", " + endCountry
        region = geo.values()[2].values()[0]
        price = 0

        tripDataSet = tourDossier.advertised_departures
        for data in tripDataSet:
            if data.currency == 'USD':
                # print data.currency
                price = data.amount

        startDate = tourDossier.departures_start_date
        endDate = tourDossier.departures_end_date
        # print "START DATE: "
        # print startDate
        # print "END DATE: "
        # print endDate

        images = tourDossier.images
        mapImageLink = images[0].values()[0]
        tourImageLink = images[1].values()[0]
        # print images[2].values()[0]

    # now.strftime('%Y-%m-%d'),now.strftime('%Y-%m-%d'
        # print "START COUNTRY " + tourDossier.

        # raw_input(">")
        # description = description.replace('\'','')
        description = string.replace(description,"'",'"')
        # description.replace('\'','\\\'')

        tourItemsUnicode = [tourId,startLocation,endLocation,startDate.strftime('%Y-%m-%d'),endDate.strftime('%Y-%m-%d'),price,description,50,name,region,tourImageLink,mapImageLink]


        # print 'returning'

        # description contains sql keywords
        return tourItemsUnicode
    except Exception as e:
        print e




# getTourByRange(23000,10)
