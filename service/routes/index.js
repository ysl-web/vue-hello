var express = require('express');
var router = express.Router();
var cors = require('cors');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/test', cors(), function(req, res, next){
  res.json({name: '杨石林', id: '123456'});
})

module.exports = router;
