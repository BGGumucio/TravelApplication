var express = require('express');
var router = express.Router();
var cartCtrl = require('../controllers/cartCtrl');



router.get('/',cartCtrl.test);
//TODO change to post, get info from body in controller
router.get('/addToCart', cartCtrl.addToCart);

module.exports = router;
