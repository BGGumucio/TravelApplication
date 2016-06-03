from gapipy import Client

endpoint = 'https://rest.gadventures.com';

APIKEY = 'live_ba297406f66b04879ccb159952ab1ee3d3726002';

print gapi.tour_dossiers.get(24309).structured_itineraries[0].id



gapi = Client(application_key=APIKEY)
gapi.tours.get(21346).to_json()


tourDossier = gapi.tour_dossiers.get(24309)

iteneraryId = gapi.tour_dossiers.get(24309).structured_itineraries[0].id
structuredItenerary = tourDossier.structured_itineraries[0]

print gapi.tour_dossiers.get(24309).structured_itineraries[0].id

print itinerary = gapi.itineraries.get(iteneraryId)


images = gapi.tour_dossiers.get(24319).images

for image in images:
    print image.values()[0]
