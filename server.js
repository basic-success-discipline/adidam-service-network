var http = require('http');
var express = require('express');
const PORT=3000; 
var app = express();
app.use(express.static(__dirname + '/app'));
app.listen(process.env.PORT || 3000, function(){
  console.log("Listening on localhost:" + parseInt(process.env.PORT || 3000));
});