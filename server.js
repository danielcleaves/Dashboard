// Require the Express Module
var express = require("express");
// Create an Express App
var app = express();
// Require body-parser (to recieve post data from clients)
var bodyParser = require("body-parser");
// Integrate body-parser with our App
var path = require('path');

app.use(express.static(path.join(__dirname, "./client/static")));

app.use(bodyParser.urlencoded());
// Setting our Static Folder Directory

// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './client/views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app)
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})


