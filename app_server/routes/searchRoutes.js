var express = require('express');
var router = express.Router();
var searchCtrl = require('../controllers/searchCtrl');

router.get('/',searchCtrl.go);
router.get('/:search',searchCtrl.go);

// router.post('/test', searchCtrl.test);

module.exports = router;
