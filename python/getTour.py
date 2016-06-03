
######this is for the TOOOUURRRR thing

from gapipy import Client

tourId = 23001

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


# print "START COUNTRY " + tourDossier.


raw_input(">")
