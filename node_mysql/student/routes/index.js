var express = require('express');
var router = express.Router();
var db = require('./../config/db.js');

var DBConnection = db.DBConnection;
var sql = 'SELECT * FROM STUDENT';

/* GET home page. */
router.get('/', function(req, res, next) {
  DBConnection.query(sql,function(err,rows){
  	if(err){
  		res.render('index', { title: '学生成绩录入系统', data:[] });
  	}else{
  		res.render('index', { title: '学生成绩录入系统', data:rows });
  	}
  });
});

module.exports = router;
