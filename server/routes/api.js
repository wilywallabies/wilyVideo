'use strict';
//Backend API call
var express = require('express');
var router = express.Router();


var statusCtrl = require('../controller/onlineStatusController');
var friendCtrl = require('../controller/friendController');
var allUser = require('../controller/availUserController');
var deleteCtrl = require('../controller/friendDeleteController');
var currentUser = require('../controller/currentUserController');

//FriendList Routes
router.get('/friend/', friendCtrl.retrieveFriends);
router.post('/friend/', friendCtrl.addFriend);

//FriendDelete Routes
router.delete('/friendDelete/:friendId/:userId', deleteCtrl.deleteFriend);

//Available User Routes
router.get('/allUser/', allUser.availableUser)

//Online Status Routes
router.put('/status/:userId/:status', statusCtrl.toggleStatus);


//Current User Routes
router.get('/currentUserInfo/', currentUser.getCurrentUser);



module.exports = router;
