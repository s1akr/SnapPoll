var express = require('express');
var path = require('path');
var app = express();
var dbMethods = require('../Database/databaseMethods');

app.use(express.static(path.join(__dirname, './../')));

app.get('/', function(req,res) {
  res.sendFile('/index.html');
});

app.post('/login', dbMethods.createNewHost);

app.listen(8080, function() {
  console.log('Server is listening on port 8080');
});
