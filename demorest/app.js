// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/temperature/c1', function(req, res) {
  var o = {};
  o.temperature = 22;
  o.precision = "1,5%";
  res.send(o);
});


app.get('/temperature/c2', function(req, res) {
  var o = {};
  o.temperature = 23;
  o.precision = "1,8%";
  res.send(o);
});

app.post('/relai/r1', function(req, res) {
  var body = req.body;
  if (body.state == "on"){
    console.log("on");
  }else   if (body.state == "off"){
    console.log("off");
  }else{
    console.log("swap");

  }
  var o = {};
  o.result = "ok";
  res.send(o);
});


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
