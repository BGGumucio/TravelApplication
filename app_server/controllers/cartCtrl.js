var passportConfig = require('../../config/passportConfig');
var models = require('../../app_api/models');
var bcrypt = require('bcryptjs');
var request = require('request');
const saltRounds = 13;

// var cookie = require('cookie-parser');

module.exports.deleteBooking = function(req, res) {
    console.log("deleteBooking in cart controller");
    console.log(req.body);
    console.log(req.body.bookingId);
    // var continent = req.params.bookingId;
        var bookingId = req.body.bookingId;
    request.post({
        url: 'http://localhost:3000/api/bookings/deleteBooking/',
        headers: {
            'Content-type': 'application/json'
        },
        json: {
            booking_id: bookingId,

        },
        function(error, response, body) {
            if (!error && response.statusCode == 201) {
                res.send = 'Thank you for booking with Aviato!'
            } else {
                console.log(response.statusCode);
            }
        }
        // request.post('http://localhost:3000/api/bookings/deleteBooking/', function(error,response,body){
        //     if (!error) {
        //       console.log("BODY: " + body);
        //       console.log(body.bookingId);
        //
        //       console.log("cart controller - app server - delete booking mth");
        //
        //         // res.render("tours", {Tours : JSON.parse(body)});
        //         //TODO fix
        //         res.render("index");
        //     } else {
        //         res.sendStatus(500);
        //     }
        // });
    })
};


module.exports.add = function(req, res) {
    var tourList = [];
    console.log(req.body.tourId);
    console.log(req.signedCookies.currentUser);
    if (req.signedCookies.currentUser) {

        var userCookie = req.signedCookies.currentUser;

        var userName = req.signedCookies.currentUser.user.username;

        var tourID = req.body.tourId;

        var currentDate = new Date();
        bookedDate = "" + (currentDate.getYear() + 1900) + "-" + currentDate.getMonth() + "-" + currentDate.getDay();
        console.log("before request post");
        request.post({
            url: 'http://localhost:3000/api/bookings/createBooking',
            headers: {
                'Content-type': 'application/json'
            },
            json: {
                user_username: userName,
                tour_id: tourID,
                paid_status: "PAID",
                date_of_booking: bookedDate
            }
        }, function(error, response, body) {
            if (!error && response.statusCode == 201) {
                res.send = 'Thank you for booking with Aviato!'
            } else {
                console.log(response.statusCode);
            }
        });

        // var userJSON = JSON.parse(userCookie);
        // var cookieStuff = cookie(userCookie);
        // var userName = req.signedCookies.currentUser.username;
        console.log(req.user);

        console.log('book stuff with user username: ' + userName + '  and tourid: ' + req.body.tourId);
        //after book logged in
        res.redirect("/");
        //res.render('index', {user : req.user});

    } else {
        //after book not logged in
        //go to logged in page
        res.render('index', {
            user: req.user
        });
        console.log('USER NOT FOUND');

    }

};
