from gapipy import Client

APIKEY = 'live_ba297406f66b04879ccb159952ab1ee3d3726002';

gapi = Client(application_key=APIKEY)
gapi.tours.get(21346).to_json()
print gapi.tours.get(21346).to_json()



images = gapi.tour_dossiers.get(24319).images

for image in images:
    print "image link: " + image.values()[0]
