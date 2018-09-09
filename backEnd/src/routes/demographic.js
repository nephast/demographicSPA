const express = require('express');
const { demographicControllers } = require('../controllers');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const allEducation = await demographicControllers.list({ column: 'education'})
  res.status(200).json({ hello: allEducation });
});

module.exports = router;
