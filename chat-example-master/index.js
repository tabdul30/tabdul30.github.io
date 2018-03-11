var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

http.listen( port, function () {
    console.log('listening on port', port);
});

app.use(express.static(__dirname + '/public'));

var users = [];
var connections = [];
var time;
// listen to 'chat' messages
io.on('connection', function(socket){
    
    
    socket.on('addUser',function(addID){
    	
    });

    socket.on('chat', function(msg, id){
	var time = new Date();
	var timeStamp = time.getHours()+ ':'+ time.getMinutes()+ ':' + time.getSeconds();

	if(msg.indexOf("/nickcolor") ===0){
		io.emit('chat', msg);
		
	}
	
	if(msg.indexOf("/nick")===0){
		
	
	}
	io.emit('chat',timeStamp+ ' ' + msg);
	
	
    });
    

    
    socket.emit()
    
});


