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
	console.log("get one - toursCtrl app_api");
	console.log(req.params.id + " =ID");
	models.Tour.findById(req.params.id, {
		include : [{
			all : true
		}]
	})
		.then(function(tours){


			res.json(tours);
		});
};
