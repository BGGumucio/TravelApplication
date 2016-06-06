request = require ("request");

module.exports.getAll = function(req,res){
	console.log("In ViewAll Controller");
    request.get('http://localhost:3000/tour/getAllTours', function(error,response,body){
        if (!error) {
            res.render("tours", {Tour : body});
        } else {
            res.sendStatus(500);
        }
    })
};