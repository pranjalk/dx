var express = require('express');
var app = express();
app.use(express.static('static'));
app.set('views', __dirname + '/view');
app.engine('html', require('ejs').renderFile);
app.get('/', function (req, res) {
  res.render('index.html');
});

app.listen(3000, function () {
  console.log('dx server listening on port 3000!');
});