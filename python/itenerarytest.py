

from gapipy import Client


APIKEY = 'live_ba297406f66b04879ccb159952ab1ee3d3726002'

gapi = Client(application_key=APIKEY)
print gapi.itineraries.get(868).to_json()
