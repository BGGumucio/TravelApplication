var passportConfig = require('../../config/passportConfig');
var models = require('../../app_api/models');
var bcrypt = require('bcryptjs');
const saltRounds = 13;

// //Cookie stuff
// var cookieParser = require('cookie-parser');
// var credentials = require('../../credentials');
// app.use(cookieParser(credentials.cookieSecret));
module.exports.testPrintOut = function(req,res) {
	//test so page will work TODO fix this:

		console.log(req.body.search);
	res.render('index', {user : req.user});
};



module.exports.test = function(req,res) {
	//test so page will work TODO fix this:
		console.log("in search test")
	res.render('index', {user : req.user});
};
