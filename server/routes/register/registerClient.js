const express = require('express');
const router = express.Router();

const Client = require('../../models/client');

router.get('/register', function(req, res) {
    // res.render('register');
    res.send('register page');
})

/*

router.post("/register", function(req, res) {
    var newClient = {
    name: req.body.name,
    email: req.body.email,
    pw: req.body.pw
}
})
*/

module.exports = router;
