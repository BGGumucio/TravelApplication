var express = require('express');
var router = express.Router();
var searchCtrl = require('../controllers/searchCtrl');

// router.get('/',searchCtrl.go);
// router.get('/',searchCtrl.getAll);
router.get('/:continent',searchCtrl.continent)

// router.get('/test',searchCtrl.test);

// router.post('/test', searchCtrl.test);

module.exports = router;
