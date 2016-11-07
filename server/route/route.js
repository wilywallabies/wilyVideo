//Backend API call

var express = require('express');
var router = express.Router();


var authCtrl = require('../controller/authController');
var userCtrl = require('../controller/userController');


//Authentication Routes
router.post('/register', authCtrl.register);

router.post('/login', authCtrl.login);

router.get('/logout', authCtrl.logout);





//User Routes
router.get('/user', userCtrl.getUser);

router.post('/user', userCtrl.addUser);



module.exports = router;
