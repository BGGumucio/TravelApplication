var models = require('../models');

// module.exports.stuff = fucntion(req.res){
// 	console.log("yay.");
// }
//
//
// module.exports.test = function(req,res){
// 	console.log(req.body.search);
// 	// models.Tour.findAll();
//
// 	.then(function(tours){
//
//     console.log("good search things");
//     res.json(tours);
//
// 	})
// 	.catch(function(err){
//
//     console.log("error with search things");
// 		console.error(err);
// 		res.status(500);
// 		res.send(err);
//
// 	});
// };



module.exports.allBookings = function(req,res){
	console.log("in all Bookings method");
	models.Tours.findAll()
	.then(function(tours){
		res.json(tours);
	})
	.catch(function(err){
		console.error(err);
		res.status(500);
		res.send(err);
	});
};
