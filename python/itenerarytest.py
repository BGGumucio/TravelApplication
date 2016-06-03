

from gapipy import Client


APIKEY = 'live_ba297406f66b04879ccb159952ab1ee3d3726002'

gapi = Client(application_key=APIKEY)


iteneraryId =  gapi.tour_dossiers.get(24309).structured_itineraries[0].id

print "=-=-=-=-=-=-=-=-=-=-=-Itenerary information =-=-=-=-=-=-=-=-=-=-=-=-="
print gapi.itineraries.get(iteneraryId).to_json()

print "=-=-=-=-=-=-=-=-=-=-=-Itenerary information =-=-=-=-=-=-=-=-=-=-=-=-="
daysArray =  gapi.itineraries.get(iteneraryId).days
# days = [#, description]
for d in daysArray:
    print "=-=-=-=newday=-=-=-="
    print d.day
    for component in d.components:
        #USE THE LONGEST DESCRIPTION
        summaryUnicode =  component.summary
        longest = 0
        stringToUse = ""
        try:
            summaryString = summaryUnicode.decode("utf-8")
            # print len(unicode_string)
            if len(summaryString) > longest:
                longest = len(summaryString)
                stringToUse = summaryString
            print summaryString
        except UnicodeEncodeError:
                print "python made a mistake"



print "dayNumber"
# print dayNumberOneTest



#image stuff
images = gapi.tour_dossiers.get(24319).images


print "=-=-=-=-=-=-=-=-=-=-=-     Image links      =-=-=-=-=-=-=-=-=-=-=-=-="

for image in images:
    print image.values()[0]
