const net = require('net');

/*创建客户端*/
var client = net.Socket();

/*设置连接的服务器*/
client.connect(18001,'127.0.0.1',function(){
	console.log('connect the server...');

	/*发送数据*/
	client.write('message from client');
});

/*监听data事件*/
client.on('data',function(data){
	console.log('the data of server is '+data.toString());
});

/*监听error事件*/
client.on('error',function(){
	console.log('the server is closed...');
});

/*监听end事件*/
client.on('end',function(){
	console.log('data end');
});