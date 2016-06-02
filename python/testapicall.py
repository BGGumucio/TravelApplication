from gapipy import Client

endpoint = 'https://rest.gadventures.com';

APIKEY = 'live_ba297406f66b04879ccb159952ab1ee3d3726002';

gapi = Client(application_key=APIKEY)
gapi.tours.get(21346).to_json()
print gapi.tours.get(21346).to_json()
