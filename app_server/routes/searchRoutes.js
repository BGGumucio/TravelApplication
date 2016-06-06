var express = require('express');
var router = express.Router();
var searchCtrl = require('../controllers/searchCtrl');

router.post('/',searchCtrl.testPrintOut);
router.post('/test', searchCtrl.test);

module.exports = router;
