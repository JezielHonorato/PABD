let express = require('express');
let router = express.Router();
let db = require('../utils/db');

router.get('/cadastrar', function(req, res){
  res.render('cadastroEspecie');
});

router.get('/listar', function(req, res) {
  let cmd = 'SELECT * FROM tbespecie ORDER BY especie';
  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.render('listar-especie', {resultado: listagem});
  });
});

module.exports = router;