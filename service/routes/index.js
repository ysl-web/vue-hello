var express = require('express');
var router = express.Router();
var cors = require('cors');
var db = require('../db');

var corsOptions = {
  origin: 'http://localhost:8080',
  methods: ['GET', 'POST'],
  alloweHeaders: ['Content-Type', 'Authorization']
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/test', cors(corsOptions), function(req, res, next){
  //res.json({name: '杨石林', id: '123456'});
  db.query('select * from websites', (err, data) => {
    if(err){
      return res.json({
        message: '数据库请求失败！'
      });
    }
    res.json(data);
  })
})

module.exports = router;
