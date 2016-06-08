var passportConfig = require('../../config/passportConfig');
var models = require('../../app_api/models');
var bcrypt = require('bcryptjs');
var request = require('request');
const saltRounds = 13;

// var cookie = require('cookie-parser');

module.exports.add = function(req,res) {
	var tourList = [];
	console.log(req.body.tourId);
	console.log(req.signedCookies.currentUser);
	if(req.signedCookies.currentUser){

		var userCookie = req.signedCookies.currentUser;

		var userName = req.signedCookies.currentUser.user.username;

		var tourID = req.body.tourId;

		var currentDate = new Date();

		console.log("before request post");
		request.post({
        url: 'http://localhost:3000/api/bookings/createBooking',
        headers: {
				})
			  	.catch(function(err){		  	.catch(function(err){
			  		console.error(err);		  		console.error(err);
			 -		res.status(500);
			  		res.send(err);		  		res.send(err);
			  	});		  	});
			  };		  };
			 @@ -39,13 +38,11 @@ module.exports.createBooking = function(req,res) {
			      console.log(booking);		      console.log(booking);
			      models.Booking.create(booking)		      models.Booking.create(booking)
			          .then(function(bookings){		          .then(function(bookings){
			 -            res.sendStatus(201);		 +            res.render('index');
			          })		          })
			          .catch(function(err){		          .catch(function(err){
			 -            res.status(500);
			              res.send(err);		              res.send(err);
			          });		          });

			  				//redirect to index TODO change to thank you page or something?		  				//redirect to index TODO change to thank you page or something?
			 -				res.render('index');
			  };		  };

		// var userJSON = JSON.parse(userCookie);
		// var cookieStuff = cookie(userCookie);
		// var userName = req.signedCookies.currentUser.username;
		console.log(req.user);

		console.log('book stuff with user username: '+ userName +'  and tourid: ' + req.body.tourId );
		//after book logged in
		res.redirect("/");
		//res.render('index', {user : req.user});

	}else{
		//after book not logged in
		//go to logged in page
		res.render('index', {user : req.user});
		console.log('USER NOT FOUND');

	}

	// if (req.signedCookies.cart.tourList){
	// 		console.log("TOUR LIST ALREAY EXISTS");
  //       var cart = req.signedCookies.cart;
	// 			tourList = cart.tourList;
	// 			console.log("TOUR LIST: " + tourList);
	//
  //       tourList.push(req.body.tourId);
	//
	// 			console.log("TOUR LIST: " + tourList);
	//
	// 			res.cookie('cart', tourList , {signed : true});
  //       // res.send(tourList);
	//
  //   } else {
	// 		//here
	// 		console.log("TOUR LIST DOES NOT ALREAY EXISTS");
	// 		tourList.push(req.body.tourId);
	//
  //       res.cookie('cart', tourList, {signed : true});
  //       // res.send(tourList);
  //   }


};





//old stuff
// var passportConfig = require('../../config/passportConfig');
// var models = require('../../app_api/models');
// var bcrypt = require('bcryptjs');
// const saltRounds = 13;
//
// // //Cookie stuff
// // var cookieParser = require('cookie-parser');
// // var credentials = require('../../credentials');
// // app.use(cookieParser(credentials.cookieSecret));
//
// module.exports.test = function(req,res) {
// 	//test so page will work TODO fix this:
// 		console.log('wtf');
//
// 	res.send('index');
//
//
//
// };
//
//
//
// module.exports.addToCart = function(req,res) {
// 	//TODO add stuff for a real tour item
// 		console.log('sdflkjfjlk;sasdfakjkjl;fd');
//     res.cookie('testcookie',{tour:"tour test thing"},{signed:true});
// 	res.send('index');
// };
