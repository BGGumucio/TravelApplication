var express = require('express');
var router = express.Router();
var loginCtrl = require('../controllers/loginCtrl');
var cookie = require('cookie');


router.get('/', loginCtrl.home);
router.get('/login', loginCtrl.login);
router.post('/authenticate', loginCtrl.authenticate);
router.get('/signup', loginCtrl.signup);
router.post('/register', loginCtrl.register);
router.get('/logout', loginCtrl.logout);
//TODO Delete check cookies
router.get('/checkCookies', loginCtrl.checkCookies);

module.exports = router;
