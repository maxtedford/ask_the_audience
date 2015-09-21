const http = require('http');
const express = require('express');

const app = express();

app.use(express.static("public"));

app.get("/", function( req, res){
  res.sendFile(__dirname + "/public/index.html")
});

var server = http.createServer(app)
  .listen(3000, function() {
    console.log('Listening on port 3000.');
});
