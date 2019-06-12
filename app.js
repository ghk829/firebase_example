var express = require("express");
var app = express();


app.get('/', function (req, res) {
   //res.send('Hello World!');
   res.sendFile(__dirname+'/index.html');
});
app.use('/js', express.static(__dirname + '/js'));

var server = app.listen(3000,function(){})
