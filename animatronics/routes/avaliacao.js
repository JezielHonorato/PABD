let express = require('express');
let router = express.Router();
let db = require('../utils/db');

router.get('/cadastrar', function(req, res){
  res.render('cadastroAvaliacao');
});

router.get('/listar', function(req, res) {
  let cmd = 'SELECT	* FROM tbavaliacao';
  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.render('listar-avalicao', {resultado: listagem});
  });
});

module.exports = router;