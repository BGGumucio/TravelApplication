request = require ("request");

module.exports.getAll = function(req,res){
    request.get('http://localhost:3000/api/tours/getAllTours', function(error,response,body){
        if (!error) {
            res.render("tours", {Tours : JSON.parse(body)});
        } else {
            res.sendStatus(500);
        }
    });
};

module.exports.getOne = function(req,res){
	var id = req.params.id;
    request.get('http://localhost:3000/api/tours/' + id, function(error,response,body){
        if (!error) {
//         console.log(JSON.parse(body));
            res.render("singleTour", {Tour : JSON.parse(body)});
        } else {
            res.sendStatus(500);
        }
    });
};

module.exports.myBookings = function(req,res){
		console.log("before post request");
	var userName = req.user.username;
		request.post({
        url: 'http://localhost:3000/api/bookings/myBookings',
        headers: {
            'Content-type': 'application/json'
        },
        json: {
            user_username: userName
        }
    }, function(error, response, body) {
        if (!error) {
<<<<<<< HEAD
        console.log("in my bookings frontend");
            res.render("myBookings", {myBookings : body});
        } else {
            res.sendStatus(500);
=======
          	console.log("in my bookings frontend");
        	console.log(body);
            res.render("myBookings", {myBookings : body});
>>>>>>> 8bf161f22b9dcde10ed7f0ef5d7973d8d17c5f8c
        }
        else{
        	console.log(error);
        	res.sendStatus(500);
        }
    });	
};
