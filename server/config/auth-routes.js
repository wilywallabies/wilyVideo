'use strict'
//Backend router for authentication

var express = require('express');
var router = express.Router();




router.post('/register', (req, res) => {

})

router.post('/login', (req, res, next) => {

})

router.get('/logout', (req, res) => {
    // req.logout();
    // res.status(200).json({
    //     status: 'Bye!'
    // });
})




module.exports = router;
