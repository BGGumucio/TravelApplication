
######this is for the TOOOUURRRR thing

from gapipy import Client

tourId = 24309

APIKEY = 'live_ba297406f66b04879ccb159952ab1ee3d3726002'

gapi = Client(application_key=APIKEY)

iteneraryId =  gapi.tour_dossiers.get(tourId).structured_itineraries[0].id

tourDossier = gapi.tour_dossiers.get(tourId)

print "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="
print "NAME: "  + tourDossier.name

print "DESCRIPTION: " + tourDossier.description

#geography is of dictionary type
geo = tourDossier.geography
# print "START CITY: "
startCity =  geo.values()[0].values()[0]

# print "START COUNTRY: "
startCountry = geo.values()[1].values()[2]

####push to start location in db
print "START LOCATION : " + startCity + ", " + startCountry

#end country works
endCountry = geo.values()[4].values()[2]
#error
endCity = geo.values()[6].values()[0]


###push to end location in db
print "END LOCATION : " + endCity + ", " + endCountry

##region
region = geo.values()[2].values()[0]
print "REGION (continent): " + region


price = 0

tripDataSet = tourDossier.advertised_departures
for data in tripDataSet:
    if data.currency == 'USD':
        print data.currency
        print data.amount

startDate = tourDossier.departures_start_date
endDate = tourDossier.departures_end_date
print "START DATE: "
print startDate
print "END DATE: "
print endDate

images = tourDossier.images
print images[0].values()[0]
print images[1].values()[0]
print images[2].values()[0]


# print "START COUNTRY " + tourDossier.

raw_input(">")
