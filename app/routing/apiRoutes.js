

var home = require("..app/routes/home");
var survey = require("..app/routes/survey");

module.exports = function(app) {
   
    
    
    app.get("..app/routes/home", fucntion (req,res) {
        res.json(home);
    });

    app.get("..app/routes/home", fucntion (req,res) {
        res.json(home);
    });

    