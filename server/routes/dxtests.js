module.exports = (app, sequelize) => {
  app.get('/dxtests', (req, res) => {
    const inputString = req.query.q;
    let queryPartOne = 'SELECT name, description, price, `dx_tests`.`dx_id` from `tests_list` ';
    queryPartOne += 'INNER JOIN `dx_tests` ';
    queryPartOne += 'ON `tests_list`.`id` = `dx_tests`.`test_id` ';
    queryPartOne += 'WHERE `dx_tests`.`dx_id` = :search_name';
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
