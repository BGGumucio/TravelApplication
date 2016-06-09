request = require ("request");

// module.exports.getAll = function(req,res){
//     request.get('http://localhost:3000/api/search', function(error,response,body){
//         if (!error) {
//             res.render("tours", {Tours : JSON.parse(body)});
//         } else {
//             res.sendStatus(500);
//         }
//     });
// };



module.exports.country = function(req,res){
	console.log(req.params.country);
	//api stuff here
};

module.exports.test = function(req,res){
	console.log("test shit");
};
