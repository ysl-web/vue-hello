var express = require('express');
var router = express.Router();
var cors = require('cors');
var db = require('../db');

var corsOptions = {
    origin: 'http://192.168.3.16:8080',
    methods: ['GET', 'POST'],
    alloweHeaders: ['Content-Type', 'Authorization']
};
/* GET home page. */


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/getTest', function(req, res, next) {
    console.log(req.query.id);
    let { id } = req.query;
    let sql = `select * from websites where id='` + id + `'`;
    db.query(sql, (err, data) => {
        if (err) {
            return res.json({
                message: '数据库请求失败！'
            });
        }
        res.json(data);
    })
});

router.post('/test', function(req, res, next) {
    //res.json({name: '杨石林', id: '123456'});
    let sql = `select * from websites where name='` + req.name + `'`;
    console.log(req.body);
    db.query('select * from websites', (err, data) => {
        if (err) {
            return res.json({
                message: '数据库请求失败！'
            });
        }
        res.json(data);
    })
})

module.exports = router;