const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

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
});

module.exports = server;
