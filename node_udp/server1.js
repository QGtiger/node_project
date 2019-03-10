const dgram = require('dgram');

var server = dgram.createSocket('udp4');
var message = new Buffer('Some message from Server');

server.bind(41234,'localhost',function(){
	console.log('bind 41234');
});


/*监听message事件*/
server.on('message',function(msg,rinfo){
	console.log(msg.toString());
	server.send(message,0,message.length,rinfo.port,rinfo.address,function(err,bytes){
		if(err){
			console.log(err);
			return;
		}
		console.log("send "+bytes+" message");
	})
});


/*监听listening事件*/
server.on('listening',function(){
	console.log('listening is begining');
});


/*监听close事件*/
server.on('close',function(){
	console.log('server is closed');
});


/*监听error事件*/
server.on('error',function(err){
	console.log(err);
})