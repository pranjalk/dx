const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist'));
app.set('views', path.join(__dirname, '../views'));

app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(3000, () => {
  console.log('dx server listening on port 3000!');
});
