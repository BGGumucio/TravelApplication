from gapipy import Client

endpoint = 'https://rest.gadventures.com';

APIKEY = 'live_ba297406f66b04879ccb159952ab1ee3d3726002';

gapi = Client(application_key=APIKEY)

# print gapi.tour_dossiers.get(15)
# #print gapi.tour_dossiers.get(15)
# print gapi.tour_categories.get(14).to_json();

for x in range(21346,21356):
    print x
    print gapi.tours.get(x).to_json()


# print gapi.tours.get(21346).to_json()
