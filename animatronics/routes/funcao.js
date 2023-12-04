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

router.get('/cadastrar', function(req, res){
  res.render('cadastroFuncao');
});

router.post("/cadastrar", function (req, res, next) {
  let funcao = req.body.funcao;
  let cmd = "INSERT INTO tbfuncao (funcao) VALUES (?);";
  db.query(cmd, [funcao], function (erro) {
    if (erro) {
      res.send(erro);
    }
    res.redirect("/funcoes/listar");
    }
  );
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


module.exports = router;