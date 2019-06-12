var express = require("express");
var app = express();

var port = process.env.PORT || 3000; 

app.get('/', function (req, res) {
   //res.send('Hello World!');
   res.sendFile(__dirname+'/index.html');
});
app.use('/js', express.static(__dirname + '/js'));

var server = app.listen(port,function(){})
