var express = require('express');
var router = express.Router();
var user = require('../lib/login');

router.get('/', (req, res) => {
  res.render('login');
  res.end();
})

router.post('/', async (req, res, next) => {
  let bool = await user.create(req.body);
  if(bool) {
    res.send({
      status: 200,
      message: '注册成功'
    })
  } else {
    res.send({
      status: 200,
      message: '注册失败'
    })
  }
  res.end();
})

module.exports = router;