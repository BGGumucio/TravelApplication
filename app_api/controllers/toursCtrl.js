var models = require('../models');


module.exports.allTours = function(req, res){
	models.Tours.FindAll()
	.then(function(tours){
    console.log(tours);
  },
  function(err) {
    console.error(error);
  });
};

module.exports.show = function(req,res){
	models.Tours.findById(req.params.id)
		.then(function(tours){
			res.json(tours);
		});
};
