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
/*
sequelize
  .query('SELECT * FROM user')
    .then((myTableRows) => {
      console.log(myTableRows);
    })
    .catch((err) => {
      console.log('SOMETHING DONE GOOFED', err);
    })
    .done();
*/
app.use(express.static('./dist'));
app.set('views', path.join(__dirname, '../views'));

app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/searchdx', (req, res) => {
  const inputString = req.query.q;
  const searchString = inputString.concat('%');
  sequelize
    .query('SELECT * FROM diagnostic_center  WHERE `name` like :search_name', {
      replacements: {
        search_name: searchString,
      },
      type: sequelize.QueryTypes.SELECT,
    })
    .then((myTableRows) => {
      res.end(JSON.stringify({ result: myTableRows }));
    })
    .catch((err) => {
      console.log('SOMETHING WENT WRONG!', err);
      res.end(JSON.stringify(err));
    })
    .done();
});

app.listen(3000, () => {
  console.log('dx server listening on port 3000!');
});
