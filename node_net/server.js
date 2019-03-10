const net = require('net');
// var server = net.createServer(function(socket){
// 	console.log('someone connected...');
// });

var server = new net.Server();

server.on('connection',function(socket){
	console.log('Someone contected...');
	server.getConnections(function(err, count){
	if (err){
		console.log("error");
	}
	console.log('the couny of client is '+ count);
});
});

server.listen(18001);

server.on('listening', function(){
	console.log('server is listening at '+ server.address().port);
});

server.on('close', function(){
	console.log('server is closed...');
});

server.on('error',function(){
	console.log('error!');
});

server.maxConnextions = 3;
