const DemographicControllers = require('./demographic');
const { demographicDb } = require('../db');

const demographicControllers = new DemographicControllers(demographicDb);

module.exports = {
  demographicControllers
};
