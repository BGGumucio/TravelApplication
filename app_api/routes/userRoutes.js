// userRoutes.js

var express = require('express');
var router = require('./toursRoutes');
var userCtrl = require('../controllers/userCtrl');

router.get('/', userCtrl.index);

router.get('/:id', userCtrl.show);

router.post('/', userCtrl.create);

router.delete('/:id', userCtrl.destroy);

router.put('/:id', userCtrl.update);

module.exports = router;

