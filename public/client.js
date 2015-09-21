var socket = io();

var connectionCount = document.getElementById('connection-count');
var connectionWelcome = document.getElementById('connection-welcome');

socket.on('usersConnected', function(count) {
  connectionCount.innerText = 'Connected Users: ' + count;
});

socket.on('statusMessage', function(message) {
  connectionWelcome.innerText = message;
});
