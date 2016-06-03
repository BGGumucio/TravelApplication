
######this is for the itenerary item

from gapipy import Client

APIKEY = 'live_ba297406f66b04879ccb159952ab1ee3d3726002'

gapi = Client(application_key=APIKEY)

###add this to database as TourId
tourId  = 23000
print gapi.tour_dossiers.get(tourId).to_json()
raw_input(">")
iteneraryId =  gapi.tour_dossiers.get(tourId).structured_itineraries[0].id

print "=-=-=-=-=-=-=-=-=-=-=-Itenerary information =-=-=-=-=-=-=-=-=-=-=-=-="
print gapi.itineraries.get(iteneraryId).to_json()

print "=-=-=-=-=-=-=-=-=-=-=-Itenerary information =-=-=-=-=-=-=-=-=-=-=-=-="
######start itenerary id
daysArray =  gapi.itineraries.get(iteneraryId).days
for d in daysArray:
    #AKA FOR EACH ITIN ITEM
    print "=-=-=-=newday=-=-=-="
    day = d.day
    #rec day to database as DAY
    for component in d.components:
        #USE THE LONGEST DESCRIPTION
        summaryUnicode =  component.summary
        longest = 0
        descriptionToUse = ""
        try:
            summaryString = summaryUnicode.decode("utf-8")
            # print len(unicode_string)
            if len(summaryString) > longest:
                longest = len(summaryString)
                descriptionToUse = summaryString
                ###rec descriptionToUse to database, as iten. desc
            print summaryString
        except UnicodeEncodeError:
                print "python made a mistake"
######start itenerary id







###below useless for final product

print "dayNumber"
# print dayNumberOneTest



#image stuff
images = gapi.tour_dossiers.get(24319).images


print "=-=-=-=-=-=-=-=-=-=-=-     Image links      =-=-=-=-=-=-=-=-=-=-=-=-="

for image in images:
    print image.values()[0]
