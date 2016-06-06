var express = require('express');
var router = express.Router();
var viewAllCtrl = require('../controllers/viewAll');

router.get('/getAllTours', viewAllCtrl.getAll);

module.exports = router;