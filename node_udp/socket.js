var dgram = require('dgram');

var message = new Buffer('Some message from client');

var socket = dgram.createSocket('udp4');

socket.send(message,0,message.length,41234,'localhost',function(err,bytes){
	if(err){
		console.log(err);
		return;
	}
	console.log("client "+ bytes+" message");
});

socket.on('message',function(msg,rinfo){
	console.log('Some message from server');
})