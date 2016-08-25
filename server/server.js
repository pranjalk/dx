const express = require('express');
const path = require('path');
const Sequelize = require('sequelize');
const dbConfig = require('../config/dbConfig.js');

const app = express();

const sequelize = new Sequelize(dbConfig.name, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('CONNECTED!');
  })
  .catch((err) => {
    console.log('SOMETHING DONE GOOFED', err);
  })
  .done();

require('./routes/dxsearch.js')(app, sequelize);
require('./routes/dxdetails.js')(app, sequelize);
require('./routes/dxtests.js')(app, sequelize);

app.use(express.static('./dist'));
app.set('views', path.join(__dirname, '../views'));

app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(3000, () => {
  console.log('dx server listening on port 3000!');
});
