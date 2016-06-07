var express = require('express');
var router = express.Router();
var viewCtrl = require('../controllers/viewCtrl');

router.get('/AllTours', viewCtrl.getAll);
router.get('/:id', viewCtrl.getOne);

module.exports = router;
