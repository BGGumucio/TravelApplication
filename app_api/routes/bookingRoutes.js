var express = require('express');
var router = express.Router();
var bookingsCtrl = require('../controllers/bookingsCtrl');

router.post("/deleteBooking", bookingsCtrl.deleteBooking);

router.get("/getAllBookings", bookingsCtrl.allBookings);

router.post("/getMyBookings", bookingsCtrl.myBookings);

router.post("/createBooking", bookingsCtrl.createBooking);

module.exports = router;
