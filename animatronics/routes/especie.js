let express = require('express');
let router = express.Router();
let db = require('../utils/db');

router.get('/listar', function(req, res) {
  let cmd = 'SELECT idEspecie, especie FROM tbespecie ORDER BY especie';
  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.render('listarEspecie',{resultado: listagem});
  });
});

router.get('/json', function(req, res) {
  let cmd = 'SELECT idEspecie, especie FROM tbespecie ORDER BY especie';
  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.json({resultado: listagem});
  });
});

router.get('/cadastrar', function(req, res){
  res.render('cadastroEspecie');
});

module.exports = router;