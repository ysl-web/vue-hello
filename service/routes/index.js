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
    let { id } = req.query;
    let sql;
    if (id) {
        sql = `select * from websites where id='` + id + `'`;
    } else {
        sql = `select * from websites`;
    };
    db.query(sql, (err, data) => {
        if (err) {
            return res.json({
                message: '数据库请求失败！'
            });
        }
        res.json(data);
    })
});

router.post('/upData', function(req, res, next) {
    let { name, alexa, url, country, id } = req.body;
    let sql = `update websites set name='` + name + `',alexa='` + alexa + `',url='` + url + `',country='` + country + `' where id='` + id + `'`;
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
});

module.exports = router;