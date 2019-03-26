const mysql = require('mysql');

const DB = {
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '111111',
	database: 'student'
}

const DBConnection = mysql.createConnection(DB);

DBConnection.connect(function(err){
	if(err){
		console.log('error connected: '+err.stack);
		return;
	}
	console.log('connected successful as id '+DBConnection.threadId);
});

module.exports.DBConnection = DBConnection;