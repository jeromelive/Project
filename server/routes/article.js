var express = require('express');
var router = express.Router();
var article = require('../lib/article');

router.get('/', (req, res) => {
  res.render('article');
  res.end();
})

router.post('/', async (req, res, next) => {
  let bool = await article.create(req.body);
  if(bool) {
    res.send({
      status: 200,
      message: '保存成功'
    })
  } else {
    res.send({
      status: 200,
      message: '保存失败'
    })
  }
  res.end();
})

module.exports = router;