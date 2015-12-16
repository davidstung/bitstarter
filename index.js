var fs= require ("fs");
var express = require('express');
var logger = require('morgan');
var app = express();
app.use(logger());

var htmlfile= "index.html";

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Node app is running at localhost:" + port);
});
