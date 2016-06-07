var express = require('express');
var router = express.Router();
var viewCtrl = require('../controllers/viewCtrl');
var cartCtrl = require('../controllers/cartCtrl');
router.get('/AllTours', viewCtrl.getAll);
router.get('/:id', viewCtrl.getOne);
//add to cart
//this has to go here because it is accessed through /tours
router.post('/cart/addToCart', cartCtrl.add);


module.exports = router;
