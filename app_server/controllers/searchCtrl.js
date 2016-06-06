var passportConfig = require('../../config/passportConfig');
var models = require('../../app_api/models');
var bcrypt = require('bcryptjs');
const saltRounds = 13;

// //Cookie stuff
// var cookieParser = require('cookie-parser');
// var credentials = require('../../credentials');
// app.use(cookieParser(credentials.cookieSecret));

module.exports.search = function(req,res) {
	//test so page will work TODO fix this:
		user = {
			first_name:"first test",
			last_name:"last test",
			email:"email"
		}

	res.render('index', {user : req.user});
};
