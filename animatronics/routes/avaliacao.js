let express = require('express');
let router = express.Router();
let db = require('../utils/db');

router.get('/cadastro-avaliacao', function(req, res){
  res.render('cadastroAvaliacao');
});

router.get('/listar-avalicao', function(req, res) {
  let cmd = 'SELECT	idavaliacao	cpfcliente	nomeanimatronic	estrelas FROM tbavaliacao ORDER BY nomeespecie';
  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.render('listar-avalicao', {resultado: listagem});
  });
});

module.exports = router;