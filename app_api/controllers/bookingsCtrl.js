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

module.exports.allBookings = function(req,res){
	console.log("in my Bookings method");
	console.log(req.user.user_username);
	//var user = 
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
};