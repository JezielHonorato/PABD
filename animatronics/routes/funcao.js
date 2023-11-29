let express = require('express');
let router = express.Router();
let db = require('../utils/db');

router.get('/cadastro-funcao', function(req, res){
  res.render('cadastroFuncao');
});

router.get('/listar-funcao', function(req, res) {
  let cmd = 'SELECT * FROM tbfuncao ORDER BY nomefuncao';
  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    /* Criaremos a view autores-lista.ejs no próximo slide*/
    res.render('listar-funcao', {resultado: listagem});
  });
});

module.exports = router;