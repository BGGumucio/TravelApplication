var express = require('express');
var app = express();
var cookie = require('cookie-parser');
var session = require('express-session');
var secret;
if (process.env.SECRET){
	secret = process.env.SECRET;
} else {
	var secret = require('./credentials').secret;

}
var passportConfig = require('./config/passportConfig');
var bp = require('body-parser');
var handlebars = require('express-handlebars');
var port = process.env.PORT || 3000;

app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.use(cookie(secret));

app.use(session({
	resave:false,
	saveUninitialized:false,
	secret: secret
}));



app.set('views', 'app_server/views');
app.engine('handlebars', handlebars({
	defaultLayout : '../../app_server/views/layouts/main'
}));
app.set('view engine', 'handlebars');

app.use(passportConfig.initialize());
app.use(passportConfig.session());

var models = require('./app_api/models');


app.use('/', require('./app_server/routes/loginRoutes'));
app.use('/users', require('./app_api/routes/userRoutes'));
app.use('/api/tours', require('./app_api/routes/toursRoutes'));
app.use('/api/bookings', require('./app_api/routes/bookingRoutes'));



app.use('/tours', require('./app_server/routes/toursRoutes'));
//app.use('/bookings', require('./app_server/routes/bookingsRoutes'));


//cart stuff:
app.use('/cart', require('./app_server/routes/cartRoutes'));

//deleteBooking
//http://localhost:3000/api/tours/deleteBooking/
app.use('/deleteBooking',require('./app_server/routes/toursRoutes'));
//rpt
app.use('/api/bookings', require('./app_api/routes/bookingRoutes'));

//cart get thing?????
app.use('/server/addToCart',require('./app_server/routes/cartRoutes'));

//serach stuff:
app.use('/search', require('./app_server/routes/searchRoutes'));



//{force: true} add after adding model
app.use(express.static(__dirname + '/public'));



//add this {force: true}
models.sequelize.sync()
	.then(function(){
		console.log('successfully synced db');
		app.listen(port, function(){
			console.log('listening on '+port);
		});
	})
	.catch(function(err){
		console.error(err);
	});
