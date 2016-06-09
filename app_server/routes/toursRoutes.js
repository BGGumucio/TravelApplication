var express = require('express');
var router = express.Router();
var viewCtrl = require('../controllers/viewCtrl');
var cartCtrl = require('../controllers/cartCtrl');
router.post('/deleteBooking', cartCtrl.deleteBooking);
router.get('/AllTours', viewCtrl.getAll);
router.post('/myBookings', viewCtrl.myBookings);
router.get('/:id', viewCtrl.getOne);


//search by continetneltkjneljkt route
// router.get('getByCountry/:country', viewCtrl.getByCountry)

//add to cart
//this has to go here because it is accessed through /tours
router.post('/cart/addToCart', cartCtrl.add);


module.exports = router;
