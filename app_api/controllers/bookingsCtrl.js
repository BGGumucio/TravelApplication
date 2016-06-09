var models = require('../models');


module.exports.deleteBooking = function(req,res){

	console.log("DELETE BOOKING TOUR CTRL > app_api");
	console.log(req.body.booking_id);
	models.Booking.destroy({
  						where: {
    					booking_id: req.body.booking_id    					}
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
	console.log("in MY Bookings method");
	var user = req.body.user_username;
	console.log(user + " user name");

    //var userName = req.user.username;

	console.log(req.body);
	console.log('user above');
	models.Booking.findAll({
  						where: {
    					user_username: user
    					}
    				})
	.then(function(bookings){
		res.json(bookings);
	})
	.catch(function(err){
		//first
		console.log("skldjfldksjfdlksjf");
		console.error(err);
		res.send(err);
	});
};

module.exports.createBooking = function(req,res) {
	console.log("in create booking method");
    var booking = req.body;
    console.log(booking);
    models.Booking.create(booking)
        .then(function(bookings){
            res.render('index');
        })
        .catch(function(err){
            res.send(err);
        });

				//redirect to index TODO change to thank you page or something?
};
