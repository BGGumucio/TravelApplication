var passportConfig = require('../../config/passportConfig');
var models = require('../../app_api/models');
var bcrypt = require('bcryptjs');
const saltRounds = 13;

// //Cookie stuff
// var cookieParser = require('cookie-parser');
// var credentials = require('../../credentials');
// app.use(cookieParser(credentials.cookieSecret));

module.exports.test = function(req,res) {
	//test so page will work TODO fix this:
		console.log('wtf');
	res.send('index');
};



module.exports.addToCart = function(req,res) {
	//test so page will work TODO fix this:
		console.log('sdflkjfjlk;sasdfakjkjl;fd');
	res.send('index');
};
