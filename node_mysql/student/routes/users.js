var express = require('express');
var router = express.Router();
var db = require('./../config/db');

var DBConnection = db.DBConnection;

/* GET users listing. */
router.get('/del/:id', function(req, res, next) {
	var id = req.params.id;
	DBConnection.query('DELETE FROM STUDENT WHERE id = '+id,function(err){
		if(err){
			res.send("删除失败...");
		}else{
			res.redirect("/");
		}
	})
});

router.get('/toupdate/:id',function(req,res,next){
	var id = req.params.id;
	var sql = 'SELECT * FROM STUDENT WHERE id = '+id;
	DBConnection.query(sql,function(err,data){
		if(err){
			res.send('修改页面跳转失败...');
		}else{
			res.render('update',{data:data,title:"学生信息修改"});
		}
	});
});

router.post('/update',function(req,res,next){
	var id = req.body.id;
	var name = req.body.name;
	var chinese = req.body.chinese;
	var math = req.body.math;
	var english = req.body.english;
	var sql = "UPDATE STUDENT SET name='"+name+"',chinese='"+chinese+"',math='"+math+"',english='"+english+"' WHERE id="+id;
	DBConnection.query(sql,function(err,rows){
		if(err){
			res.send('修改数据失败...');
		}else{
			res.redirect("/");
		}
	});
});

router.get('/add',function(req,res,next){
	res.render('add',{title:"学生信息添加"});
});

router.post('/add',function(req,res,next){
	var name = req.body.name;
	var chinese = req.body.chinese;
	var math = req.body.math;
	var english = req.body.english;
	var sql = "INSERT INTO STUDENT(name,chinese,math,english) values('"+name+"','"+chinese+"','"+math+"','"+english+"')";
	DBConnection.query(sql,function(err,rows){
		if(err){
			res.send('添加学生信息失败...');
		}else{
			res.redirect('/');
		}
	});

});

router.get('/search',function(req,res,next){
	res.render('search',{title:"学生信息查询",data:[]});
});

router.post('/search',function(req,res,next){
	var id = req.body.id;
	var name = req.body.name;
	// console.log('id:'+id+"  name:"+name);
	var sql = "SELECT * FROM STUDENT WHERE ";
	if(id && name){
		sql += "id="+DBConnection.escape(id)+" and name="+DBConnection.escape(name);
	}else{
		if(id){
			sql += "id="+DBConnection.escape(id);
		}
		if(name){
			sql += "name="+DBConnection.escape(name);
		}
	}
	DBConnection.query(sql,function(err,rows){
		if(err){
			res.send('查询失败');
		}
		if(rows.length==0){
			res.send('数据库中并没有您要的数据...')
		}else{
			res.render('search',{title:'学生信息查询',data:rows});
		}
	})
})

module.exports = router;
