from gapipy import Client
# import mySQLdb

endpoint = 'https://rest.gadventures.com';

APIKEY = 'test_fd1c845715e1a921f6f5c40b2b36db83bcc5ab88';

gapi = Client(application_key=APIKEY)

# print gapi.tour_dossiers.get(15)
# #print gapi.tour_dossiers.get(15)
# print gapi.tour_categories.get(14).to_json();


# y = 21346
#
#
# for x in range(y,y+10):
#     print x
#     print gapi.tours.get(x).to_json()
#


# print gapi.tours.get(10212).to_json()


# print gapi.departure_components.get(21346)
#
# tour = gapi.tours.get(24309)
# dossier = tour.tour_dossier

# print gapi.tour_dossiers.get(24309).to_json()

# this works &^%*^%&*$%&^*$%&^*%^&%^&(^*&)^&*)^%&()
print gapi.tour_dossiers.get(24309).structured_itineraries[0].id

# this works &^%*^%&*$%&^*$%&^*%^&%^&(^*&)^&*)^%&()

# print gapi.tour_dossiers.get(24309).images[0] isn't json???
# print gapi.tour_dossiers.get(24309).images[0].image_href


# this works &^%*^%&*$%&^*$%&^*%^&%^&(^*&)^&*)^%&()
# print gapi.tour_dossiers.get(24309).images[0].values()[0];
# print gapi.tour_dossiers.get(24309).images[1].values()[0];

images = gapi.tour_dossiers.get(24319).images

for image in images:
    print image.values()[0]
# this works &^%*^%&*$%&^*$%&^*%^&%^&(^*&)^&*)^%&()

# print gapi.tour_dossiers.get(24309)

# print gapi.tour_dossiers.get(24309).structured_itineraries[0].to_json()















# departures = [1,2,3]
# for x in departures:
#     print x
# # # print tour
