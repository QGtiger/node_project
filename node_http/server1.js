var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('./mime');
var path = require('path')


var server = http.createServer(function(req,res){
	// console.log(url.parse(req.url));
	var filepath = '.'+url.parse(req.url).pathname;
	if(filepath === './'){
		filepath = './index.html';
	}

	
	/*判断相应的文件文件存在*/
	fs.exists(filepath,function(exists){
		if(exists){
			var data = fs.readFileSync(filepath);
			var contenttype = mime[path.extname(filepath)];
			res.writeHead(200,{'Content-Type':'contenttype'});
			res.write(data);
			res.end();
		}else{
			res.end('404');
		}
	});
	// res.writeHead(200,{'Content-Type':'text/html'});
	// // res.end('Hello World');
	// var data = fs.readFileSync('./index.html');
	// res.write(data);
	// res.end();
});

server.listen(8001,function(){
	console.log('server is listening at '+server.address().port);
});