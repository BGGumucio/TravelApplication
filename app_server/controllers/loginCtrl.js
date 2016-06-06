var passportConfig = require('../../config/passportConfig');
var models = require('../../app_api/models');
var bcrypt = require('bcryptjs');
const saltRounds = 13;

// //Cookie stuff
// var cookieParser = require('cookie-parser');
// var credentials = require('../../credentials');
// app.use(cookieParser(credentials.cookieSecret));

module.exports.home = function(req,res) {
	res.render('index', {user : req.user});
};

//TODO delete check cookies
module.exports.checkCookies = function(req,res){
	console.log(req.signedCookies);

  res.send(req.signedCookies);
};

module.exports.login = function(req,res) {
	// res.render('login');
	//return cookie with username
	res.render('login');
	// username = 'username should be here';
	// res.cookie('loggedInUser',{username:user},{signed:true});
};

module.exports.authenticate = function(req,res) {
	console.log(req.body);
	passportConfig.authenticate('local', function(err,user,info){
		if (err || !user) {
			return res.render('login', {problem:'Please verify that user/password match is correct'});
		}
		req.login(user,function(err){
			return res.redirect('/');
		})
	})(req,res);
};

module.exports.signup = function(req,res) {
	res.render('signup');
};

module.exports.register = function(req,res) {
	bcrypt.hash(req.body.password, saltRounds, function(err,hash){
		models.User.create({
			username : req.body.username,
			password : hash,
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			address: req.body.address,
			city: req.body.city,
			state: req.body.state,
			zipcode: req.body.zipcode,
			type_of_user: req.body.type_of_user
		})
			.then(function(user){
				req.login(user,function(err){
					return res.redirect('/');
				})
			})
			.catch(function(err){
				res.status(500);
				res.send('This is an error'+ err);

			})
	});
};

module.exports.logout = function(req,res) {
	req.logout();
	res.redirect('/');
}
