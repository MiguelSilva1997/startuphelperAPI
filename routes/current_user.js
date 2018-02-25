var express = require('express');
var router = express.Router();

router.get('/current_user', (req, res) => {
  res.send(req.user);
})

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
})

module.exports = router;
