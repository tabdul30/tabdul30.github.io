// shorthand for $(document).ready(...)
$(function() {
    var socket = io();
    var iD; 
    var counter = 1; 
    

    
    $('form').submit(function(){
		socket.emit('chat', $('#m').val());
			$('#m').val('');
		return false;
    });
    
    socket.on('chat', function(msg){
		$('#messages').append($('<li>').text(msg));
    });
});
