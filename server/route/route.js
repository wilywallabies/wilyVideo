//Backend API call

var express = require('express');
var router = express.Router();


var authCtrl = require('../controller/authController');
var userCtrl = require('../controller/userController');
var friendCtrl = require('../controller/friendController');
var allUser = require('../controller/allUserController')

//Authentication Routes
router.post('/register', authCtrl.register);

router.post('/login', authCtrl.login);

router.get('/logout', authCtrl.logout);


//FriendList Routes
router.get('/friend', friendCtrl.retrieveFriends);
router.post('/friend', friendCtrl.addFriend);

router.get('/allUser', allUser.retrieveAllUser)



//User Routes
router.get('/user', userCtrl.getUser);

router.post('/user', userCtrl.addUser);



module.exports = router;
