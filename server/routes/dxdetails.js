module.exports = (app, sequelize) => {
  app.get('/dxdetails', (req, res) => {
    const inputString = req.query.q;
    let queryPartOne = 'SELECT id, name, address, phone, description ';
    queryPartOne += 'FROM diagnostic_center WHERE `id` = :search_name';
    sequelize
    .query(queryPartOne, {
      replacements: {
        search_name: inputString,
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
