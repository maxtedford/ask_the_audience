var socket = io();

var connectionCount = document.getElementById('connection-count');
var connectionWelcome = document.getElementById('connection-welcome');
var buttons = document.querySelectorAll('#choices button');

socket.on('usersConnected', function(count) {
  connectionCount.innerText = 'Connected Users: ' + count;
});

socket.on('statusMessage', function(message) {
  connectionWelcome.innerText = message;
});

for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    console.log(this.innerText);
  })
}
