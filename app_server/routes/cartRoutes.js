var express = require('express');
var router = express.Router();
var cartCtrl = require('../controllers/cartCtrl');

// router.get('/AllTours', cartCtrl.getAll);
router.post('/addToCart', cartCtrl.add);

module.exports = router;







// var express = require('express');
// var router = express.Router();
// var cartCtrl = require('../controllers/cartCtrl');
//
//
// //            /cart
// // router.get('/',cartCtrl.test);
// //TODO change to post, get info from body in controller
// router.get('/addToCart/:item', cartCtrl.addToCart);
//
// module.exports = router;
