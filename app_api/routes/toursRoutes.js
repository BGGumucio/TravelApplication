var express = require('express');
var router = express.Router();
var toursCtrl = require('../controllers/toursCtrl');
var cartCtrl = require('../controllers/toursCtrl');

var bookingsCtrl = require('../controllers/bookingsCtrl');


router.post("/deleteBooking", bookingsCtrl.deleteBooking);


router.get("/getAllTours", toursCtrl.allTours);
router.get('/:id', toursCtrl.getOne);

//TODO make get country method in tours ctrl
router.get('/getByContinent/:continent',toursCtrl.getByContinent);

// router.delete('/deleteBooking',cartCtrl.deleteBooking);

// router.get('/:uid/tourss', toursCtrl.index);
// router.get('/:uid/tourss/:tid', toursCtrl.show);
// router.post('/:uid/tourss', toursCtrl.create);
// router.put('/:uid/tourss/:tid', toursCtrl.update);
// router.delete('/:uid/tourss/:tid', toursCtrl.destroy);

module.exports = router;
