'use strict';
//Backend API call
var express = require('express');
var router = express.Router();


var userCtrl = require('../controller/userController');
var friendCtrl = require('../controller/friendController');
var allUser = require('../controller/availUserController');
var deleteCtrl = require('../controller/friendDeleteController');

//FriendList Routes
// router.get('/friend', friendCtrl.retrieveFriends);
router.get('/friend/', friendCtrl.retrieveFriends);

router.post('/friend', friendCtrl.addFriend);

// router.delete('/friend', friendCtrl.deleteFriend);

//FriendDelete Routes
router.delete('/friendDelete/:friendId/:userId', deleteCtrl.deleteFriend);

//Available User Routes
router.get('/allUser/', allUser.availableUser)

//User Routes
router.get('/user', userCtrl.getUser);

router.post('/user', userCtrl.addUser);

module.exports = router;
