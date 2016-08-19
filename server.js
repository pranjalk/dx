const express = require('express');
const reactEngine = require('react-engine');
const path = require('path');

const app = express();
// create an engine instance
const engine = reactEngine.server.create({
});
app.engine('.jsx', engine);

app.set('views', path.join(__dirname, '/view'));
app.set('view engine', 'jsx');
app.set('view', require('react-engine/lib/expressView'));

app.get('/', (req, res) => {
  res.render('index.jsx');
});

app.listen(3000, () => {
  console.log('dx server listening on port 3000!');
});
