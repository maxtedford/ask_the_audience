const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
var votes = {};

const app = express();

app.use(express.static("public"));

app.get("/", function( req, res){
  res.sendFile(__dirname + "/public/index.html")
});

const port = process.env.PORT || 3000;

const server = http.createServer(app)
  .listen(port, function() {
    console.log('Listening on port:' + port);
});

const io = socketIO(server);

io.on('connection', function(socket) {
  console.log('Someone just connected.', io.engine.clientsCount + ' total connections.');
  io.sockets.emit('usersConnected', io.engine.clientsCount);
  socket.emit('statusMessage', 'You have connected.');
  
  socket.on('message', function(channel, message) {
    if (channel === 'voteCast') {
      votes[socket.id] = message;
      console.log(votes);
    }
  });
  
  socket.on('disconnect', function () {
    console.log('Someone just disconnected.', io.engine.clientsCount + ' total connections.');
    delete votes[socket.id];
    console.log(votes);
    io.sockets.emit('usersConnected', io.engine.clientsCount);
  });
});

module.exports = server;
