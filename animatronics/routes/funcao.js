let express = require('express');
let router = express.Router();
let db = require('../utils/db');

router.get('/listar', function(req, res) {
  let cmd = 'SELECT idFuncao, funcao FROM tbfuncao ORDER BY funcao';
  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    /* Criaremos a view autores-lista.ejs no próximo slide*/
    res.render('listarfuncao',{resultado: listagem});
  });
});

router.get('/json', function(req, res) {
  let cmd = 'SELECT idFuncao, funcao FROM tbfuncao ORDER BY funcao';
  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    /* Criaremos a view autores-lista.ejs no próximo slide*/
    res.json({resultado: listagem});
  });
});

router.get('/cadastrar', function(req, res){
  res.render('cadastroFuncao');
});

module.exports = router;