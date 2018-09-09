const knex = require('knex');

const pool = knex({
  client: process.env.DB_CLIENT || 'mysql',
  connection: {
    host : process.env.DB_HOST || 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
    user : process.env.DB_USER || 'test-read',
    password : process.env.DB_PASSWORD || 'xnxPp6QfZbCYkY8',
    database : process.env.DB_NAME || 'birdietest',
    port : process.env.DB_PORT || 3306
  }
});

module.exports = pool;
