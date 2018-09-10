const express = require('express');
const Promise = require('bluebird');
const { demographicControllers } = require('../controllers');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const { err, data } = await demographicControllers.getColumns();
  if (err) {
    const error = new Error();
    return next(error);
  }
  const filteredList = data.filter(item => item['TABLE_NAME'] === 'census_learn_sql').map(item => item['COLUMN_NAME'])
  res.status(200).json(filteredList);
});

router.get('/:id', async (req, res, next) => {
  let outputArray = [];
  let resultOutput = [];

  const id = req.params.id;
  const { err, data } = await demographicControllers.list({ column: id });
  if (err) {
    const error = new Error();
    return next(error);
  }
  const unique = [...(new Set(data.map((obj) => obj[id])))];

  unique.forEach((el) => { 
    outputArray.push(demographicControllers.get({ [id]: el }))
  });
  
  const results = await Promise.all(outputArray);

  results.forEach(item => {
    const averageAge = Math.round(item.data.reduce((a,b) => +a + +b.age, 0)/item.data.length);
    const count = item.data.length;
    const ind = results.indexOf(item)
    resultOutput.push({ averageAge, count, name: unique[ind] })
  });

  const outputSorted = resultOutput.sort((a,b) => {
  return b.count - a.count
  });

  res.status(200).json(outputSorted);
  return next();
});

module.exports = router;
