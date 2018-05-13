var express = require("express");
var bodyParser = require("body-parser");
var friends = require("./data/friends.js")
console.log(friends)

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// fs.readFile("public/home", function(htmlPage) {
    // res.send(htmlPage)
app.get("/", function(req, res) {
  res.send(homeHTML)
},
fs.readFile("app/public/home", function(homeHTML){
    res.send(homeHTML)
  }));

// build server - send back home.html when GET to /

app.get("/", function(req, res) {
  res.send(homeHTML)
}, 
fs.readFile("app/public/home", function(home){
  res.send(homeHTML)
}));

// send survey.html when GET to /survey

app.get("/", function(req, res) {
  res.send(surveyHTML)
}, 
fs.readFile("app/public/home", function(survey){
  res.send(surveyHTML)
}));


// write html pages


// write frontend js with jquery
    // on the submit - creat an array of the scores
    // send data in POST request body to backend at /surveyresults

// create a route to handle a POST to /surveyresults
app.post("app/public/survey", function(req,res){

  var friendResults = req.body;
  friendResults.routeName = friendResults.name.replace(/\s+/g, "").toLowerCase();

  console.log(friendResults);

  characters.push(friendResults);

  res.json(friendResults);
});


// create Friend object save it a global friends array
// This is created in "friends.js file"


// compare friends
// in callback of .post("/surveyresults") send back the name of the friend it matches with
app.post("app/public/survey"), function (req,res){

if (friendResults > friends) {
  console.log("You have a friend")  
}
else (friendResults < friends);{
  console.log("Sorry no matches")
};
}  

// in the .then of the ajax POST (frontend) show it on page somewhere with a little message

$.post("Friends").then(
  function() {
    alert( "Friends!" );
  }, function() {
    alert( "No Matches!" );
  }
);

























// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  