var express = require('express');
var router = express.Router();
var searchCtrl = require('../controllers/searchCtrl');

router.get('/',searchCtrl.testPrintOut);
router.post('/test', searchCtrl.test);

module.exports = router;
