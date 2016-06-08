var models = require('../models');


module.exports.allBookings = function(req,res){
	console.log("in all Bookings method");
	models.Booking.findAll()
	.then(function(bookings){
		res.json(bookings);
	})
	.catch(function(err){
		console.error(err);
		res.status(500);
		res.send(err);
	});
};

module.exports.myBookings = function(req,res){
	console.log("in my Bookings method");
	var user = req.signedCookies.currentUser.user.username;
	models.Booking.findAll({
  						where: {
    					user_username: user
    					}
    				})
	.then(function(bookings){
		res.json(bookings);
	})
	.catch(function(err){
		console.error(err);
		res.status(500);
		res.send(err);
	});
};


module.exports.createBooking = function(req,res) {
	console.log("in create booking method");
    var booking = req.body;
    console.log(booking);
    models.Booking.create(booking)
        .then(function(bookings){
            res.sendStatus(201);
        })
        .catch(function(err){
            res.status(500);
            res.send(err);
        });

				//redirect to index TODO change to thank you page or something?
				res.render('index');
};
