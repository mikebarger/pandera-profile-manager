var express = require('express');
var profileController = require('./profile/profileController');

var router = express.Router();

router.get('/api/profiles/:id', profileController.getProfileById);

module.exports = router;