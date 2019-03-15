var http = require('http');
var url = require('url');
var util = require('util');

var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
	//res.end(util.inspect(url.parse(req.url,true)));
	var params = url.parse(req.url,true).query;
	res.write('名字:'+params.name);
	res.write('\n');
	res.write('密码:'+params.pw);
	res.end();
});

server.listen(3000,function(){
	console.log('The server is listening at 3000...')
})
