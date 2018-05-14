

var data = require("../data/friends");
// var survey = require("..app/routes/survey");

module.exports = function(app) {
   
    
    app.post("/api/surveyresults", function (req,res) {
        console.log(req.body);
        // res.json(home);
    });

    // app.get("..app/routes/home", function (req,res) {
    //     res.json(home);
    // });
};
