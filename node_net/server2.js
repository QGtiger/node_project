const net = require('net');


var server = net.createServer(function(socket){

	/*本地端口*/
	console.log('localPort: '+socket.localPort);
	/*本地IP*/
	console.log('localAddress: '+socket.localAddress);
	/*远程端口*/
	console.log('remotePort: '+socket.remotePort);
	/*远程协议族*/
	console.log('remoteFamily: '+socket.remoteFamily);
	/*远程IP*/
	console.log('remoteAddress: '+socket.remoteAddress);
	
	socket.on('data',function(data){
		console.log(data.toString());
		var readSize = socket.bytesRead;
		console.log('the size of data is '+readSize);
	});

	/*获取地址信息*/
	var address = server.address();
	var message = 'client, the server address is ' + JSON.stringify(address);

	/*发送数据*/
	socket.write(message,function(){
		var writeSize = socket.bytesWritten;
		console.log(message + 'has send');
		console.log('the size of message is ' + writeSize);
	});



});

server.listen(18001,function(){
	console.log('server is listening at '+ server.address().port);
});