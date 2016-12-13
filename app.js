var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

// set view template

app.set('view engine','ejs');

// set express static file
app.use(express.static('./public'));

//fire Controller
todoController(app);

//listen port
app.listen(2209);
console.log("Server Listing to post 2209");