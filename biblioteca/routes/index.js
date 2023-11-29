let express = require('express');
let router = express.Router();
let db = require('../utils/db');

/* Rota principal usando a view index.ejs. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;