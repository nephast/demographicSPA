const DefaultDb = require('./defaultDb');
const { Demographic } = require('../models');

const demographicDb = new DefaultDb({ table: 'census_learn_sql', model: Demographic });

module.exports = {
  demographicDb
};
