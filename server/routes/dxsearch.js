module.exports = (app, sequelize) => {
  app.get('/searchdx', (req, res) => {
  const inputString = req.query.q;
  const searchString = inputString.concat('%');
  sequelize
    .query('SELECT id, name FROM diagnostic_center  WHERE `name` like :search_name', {
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
};
