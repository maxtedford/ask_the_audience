const http = require('http');
const express = require('express');

const app = express();

app.use(express.static("public"));

app.get("/", function( req, req){
  res.sendFile(__dirname + "/public/index.html")
});
