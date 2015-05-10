var express = require("express");
var app = express();


app.get('/', function(req,res) {
    // Send back the response 'Hello World'
    res.send("Hello World");
});

app.get("/:name", function(req, res) {
    var name = req.params.name;
    res.send("Hello " + name);
});


var sum = function(num1, num2) { return parseInt(num1, 10) + parseInt(num2, 10) };

app.get("/:operation/:num1/:num2", function(req, res) {
  var operation = req.params.operation;
  var num1 = req.params.num1;
  var num2 = req.params.num2;
  var response = "The answer is: ";
  if (operation === "add") {
    response += sum(num1, num2);
  } else {
    response = "Makes no sense. 404 >_<";
  }
  res.send(response);
});




app.listen(3000);
console.log("listening on port 3000");
