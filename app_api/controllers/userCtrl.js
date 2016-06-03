var models = require('../models');
var bcrypt = require('bcryptjs');
const saltRounds = 13;

module.exports.index = function(req,res){
	models.User.findAll({
		include : [{
			model : models.Task
		}]
	})
		.then(function(users){
			res.send(users);
		})
		.catch(function(err){
			console.error(err);
			res.status(500);
			res.send(err);
		});
};

module.exports.show = function(req,res){
	models.User.findById(req.params.id, {
		include : [{
			model : models.Task
		}]
	})
		.then(function(user){
			res.send(user);
		})
};

module.exports.create = function(req,res) {
	var user = req.body;
    var rawPassword = user.password;

    bcrypt.hash(rawPassword, saltRounds, function(err,hash){
        models.user.create({
            email : user.email,
            password : hash,
						first_name: user.first_name,
						last_name: user.last_name,
						address: user.address,
						city: user.city,
						state: user.state,
						zipcode: user.zipcode,
						type_of_user: user.type_of_user
        })
            .then(function(user) {
                res.sendStatus(201);
            })
            .catch(function(err) {
                res.status(500);
                res.send('InternalServerError: User not created');
            });

    });
};

module.exports.destroy = function(req,res){
	var id = req.params.id;
	models.User.destroy({
		where : {
			id : id
		}
	})
	.then(function(){
		res.sendStatus(202);
	})
	.catch(function(err){
		res.status(500);
		res.send(err);
	})
};

module.exports.update = function(req,res){
    var updatedUser = req.body;
    models.User.upsert(updatedUser)
        .then(function(){
            res.sendStatus(202);
        });
};
