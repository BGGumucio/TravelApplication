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
        url: 'http://localhost:3000/api/bookings/getMyBookings',
        headers: {
            'Content-type': 'application/json'
        },
        json: {
            user_username: userName
        }
    }, function(error, response, body) {
        if (!error) {

          	console.log("in my bookings frontend");
        	console.log(body);
          // console.log(response.cookie);
            res.render("myBookings", {myBookings : body});

        }
        else{
        	console.log(error);
        	res.sendStatus(500);
        }
    });
};
