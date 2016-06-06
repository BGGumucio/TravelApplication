request = require ("request");

module.exports.getAll = function(req,res){
    request.get('http://localhost:3000/api/tours/getAllTours', function(error,response,body){
        if (!error) {
            res.render("tours", {Tours : JSON.parse(body)});
        } else {
            res.sendStatus(500);
        }
    })
};

module.exports.getOne = function(req,res){
	console.log("in get one on server side");
	var id = req.params.id;
	console.log(id);
    request.get('http://localhost:3000/api/tours/' + id, function(error,response,body){
        if (!error) {
            res.render("singleTour", {Tour : JSON.parse(body)});
        } else {
            res.sendStatus(500);
        }
    })
};