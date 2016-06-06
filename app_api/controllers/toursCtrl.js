var models = require('../models');


module.exports.allTours = function(req,res){
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


module.exports.getOne = function(req,res){
	console.log(req.params.id + " =ID");
	models.Tour.findById(req.params.id)
		.then(function(tours){
			res.json(tours);
		});
};
