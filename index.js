var fs= require ("fs");
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

var data =fs.readFileSync('index.html');

app.get('/', function(request, response) {
    
    response.send(data.toString('utf8'));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
