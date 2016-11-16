//Backend API call

var express = require('express');
var router = express.Router();


var authCtrl = require('../controller/authController');
var userCtrl = require('../controller/userController');
var friendCtrl = require('../controller/friendController');
var allUser = require('../controller/availUserController');
var deleteCtrl = require('../controller/friendDeleteController');


//Authentication Routes
router.post('/register', authCtrl.register);

router.post('/login', authCtrl.login);

router.get('/logout', authCtrl.logout);


//FriendList Routes
router.get('/friend', friendCtrl.retrieveFriends);

router.post('/friend', friendCtrl.addFriend);

// router.delete('/friend', friendCtrl.deleteFriend);

//FriendDelete ROutes
router.delete('/friendDelete/:friendid', deleteCtrl.deleteFriend);


//Available User Routes
router.get('/allUser', allUser.availableUser)



//User Routes
router.get('/user', userCtrl.getUser);

router.post('/user', userCtrl.addUser);



module.exports = router;
