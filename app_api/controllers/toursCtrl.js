var models = require('../models');


module.exports.allTours = function(req,res){
// 	var tourId = 
// 	models.Booking.count({ where: ["tour_id == ?", tourId] }).then(function(numBookings) {
//   console.log("There are " + c + " projects with an id greater than 25.")
// })
	models.Tour.findAll()
	.then(function(tours){
		res.json(tours);
	})
	.catch(function(err){
		console.error(err);
		res.status(500);
		res.send(err);
	});
};

module.exports.getByContinent = function(req,res){
	console.log("IN APP API CONTINEITNETINETINETIN wowowowowowowowowowoewoewowoq2wo02qwo2wowo");
	console.log(req.params.continent + " =ID");
	models.Tour.findAll({
  						where: {
    					continent: req.params.continent
    					}
    				})
		.then(function(tours){


			res.json(tours);
		});

};

module.exports.getOne = function(req,res){
	console.log(req.params.id + " =ID");
	models.Tour.findById(req.params.id, {
		include : [{
			all : true
		}]
	})
		.then(function(tours){
			models.Booking.count({ where: ["tour_id = ?", tours.id] })
			.then(function(numBookings) {
    			tours.num_avail = (tours.num_avail - numBookings);
    			console.log(tours.num_avail);
    			//console.log(tours);
    			res.json(tours);

 			})
		});
};
