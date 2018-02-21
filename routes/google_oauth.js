var express = require('express');
var router = express.Router();
const passport = require('passport');
require('../services/passport')

router.get('/', passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get('/callback', passport.authenticate('google'));



module.exports = router;
