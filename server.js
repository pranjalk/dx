const express = require('express');

const app = express();

const path = require('path');

app.use(express.static('static'));
app.set('views', path.join(__dirname, '/view'));

app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  res.render('index.html');
});

app.listen(3000, function () {
  console.log('dx server listening on port 3000!');
});