request = require ("request");

module.exports.getAll = function(req,res){
    request.get('http://localhost:3000/tours/getAllTours', function(error,response,body){
        if (!error) {
            res.render("tours", {Tours : JSON.parse(body)});
        } else {
            res.sendStatus(500);
        }
    })
};