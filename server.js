//import express module and save to variable express
var express = require("express");
//import body-parser module and save to variable bodyParser
var bodyParser = require("body-parser");

//instantiate the express module and save all the methods instide to the variable app
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//add these lines in to create connection to routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});


// I am still working on getting my array to calculate a match for the new user with a friends from the global variable. 