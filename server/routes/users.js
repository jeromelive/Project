var express = require('express');
var router = express.Router();
var user = require('../lib/login');

/* GET users listing. */
router.get('/:phone', async (req, res, next) => {
  let usr = await user.find(req.params.phone);
  if(usr.length === 0) {
    res.render('error');
  } else {
    res.render('users', {
      password: usr[0].password
    })
  }
  res.end();
});

module.exports = router;
