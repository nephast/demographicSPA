const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  res.status(200).json({ hello: 'bonjour' });
});

module.exports = router;
