const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./src/routes');

app.use('/api/v1/demographic', routes.demographic);

app.listen(PORT, () => {
  console.log(`SERVER RUNNING on ${PORT}`);
});

module.exports = app;
