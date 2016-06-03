var express = require('express');
var router = express.Router();
var toursCtrl = require('../controllers/toursCtrl');


router.get("/getAllTours", toursCtrl.allTours);

// router.get('/:uid/tourss', toursCtrl.index);
// router.get('/:uid/tourss/:tid', toursCtrl.show);
// router.post('/:uid/tourss', toursCtrl.create);
// router.put('/:uid/tourss/:tid', toursCtrl.update);
// router.delete('/:uid/tourss/:tid', toursCtrl.destroy);

module.exports = router;
