from gapipy import Client

endpoint = 'https://rest.gadventures.com';

APIKEY = 'live_ba297406f66b04879ccb159952ab1ee3d3726002';

gapi = Client(application_key=APIKEY)

# print gapi.tour_dossiers.get(15)
# #print gapi.tour_dossiers.get(15)
# print gapi.tour_categories.get(14).to_json();

tours = []

tours = gapi.tours.all(10)

for x in range(9):
    print tours(x).to_json()
