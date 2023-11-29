let express = require('express');
let router = express.Router();
let db = require('../utils/db');

/* Rota principal usando a view index.ejs. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Outras rotas definidas anteriormente... */
router.get('/autores/listar', function(req, res) {
  db.query('SELECT * FROM TbAutor', [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.send(listagem);
  });
});

module.exports = router;