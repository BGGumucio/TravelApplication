// request = require ("request");
//
// module.exports.go = function(req,res){
//     request.get('http://localhost:3000/search/go', function(error,response,body){
//         if (!error) {
// 					console.log("OH WOW");
//           console.log(req.query.search);
// 					//TODO make this go to somewhere else
//             res.render("tours", {Tours : "lol"});
//         } else {
//             res.sendStatus(500);
//         }
//     })
// };

var passportConfig = require('../../config/passportConfig');
var models = require('../../app_api/models');
var bcrypt = require('bcryptjs');
const saltRounds = 13;

// //Cookie stuff
// var cookieParser = require('cookie-parser');
// var credentials = require('../../credentials');
// app.use(cookieParser(credentials.cookieSecret));
module.exports.go = function(req,res) {
	//test so page will work TODO fix this:
		console.log(req.query.search);
    //this works
	// res.render('index', {user : req.user});
  //TODO this might not
  res.render('../app_api/routes/searchRoutes/')



};


module.exports.test = function(req,res) {
	//test so page will work TODO fix this:
		console.log("in search test")
	res.render('index', {user : req.user});
};
