var express = require('express');
var router = express.Router();
var bookingsCtrl = require('../controllers/bookingsCtrl');


router.get("/getAllBookings", bookingsCtrl.allBookings);

router.post("/createBooking", bookingsCtrl.createBooking);

module.exports = router;