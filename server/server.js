var express = require('express');
var path = require('path');
var app = express();
var dbMethods = require('../Database/databaseMethods');

//MP - original code.
// app.use(express.static(path.join(__dirname, './../')));

app.use(express.static(path.join(__dirname, '../')));

app.get('/', function(req,res) {
  res.sendFile('/index.html');
});

// MP - commented out
// app.post('/login', dbMethods.createNewHost);

app.listen(8080, function() {
  console.log('Server is listening on port 8080');
});

//MP - routes code for iteration project
// Confirm file structure and file path with team. Currently commented out.

// app.get('/', function(req,res) {
//   res.sendFile('/vote.html');
// });

// app.get('/results', function(req,res) {
//   res.sendFile('/results.html');
// });

// app.get('/data', 'Middleware goes here', function(req,res) {
  //This callback may not be necessary
// });

// app.post('/data', 'Middleware goes here', function(req,res) {
 //This callback may not be necessary
// });