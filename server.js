const express = require('express');
const reactEngine = require('react-engine');
const path = require('path');

const app = express();
// create an engine instance
const engine = reactEngine.server.create({
});
app.engine('.jsx', engine);

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jsx');
app.set('view', require('react-engine/lib/expressView'));

const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
