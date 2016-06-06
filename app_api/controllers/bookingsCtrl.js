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