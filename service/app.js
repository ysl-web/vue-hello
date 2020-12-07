var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');
//遗留问题：如何在根js文件中设置为全局可使用的包？

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(bodyParser.urlencoded({ //配置这两行代码
    extended: true
}));
app.use(bodyParser.json()); //配置这两行代码

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//app.use(cors());
app.use(cors({
    origin: ['http://192.168.3.16:8080'], //指定接收的地址
    methods: ['GET', 'POST'], //指定接收的请求类型
    alloweHeaders: ['Content-Type', 'Authorization'] //指定header
}));
//cors包：解决跨域 使192.168.3.16：8080能访问到; 不要用localhost

/* app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080/');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS'); // 允许的 http 请求的方法
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  if (req.method == 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  };
}) */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;