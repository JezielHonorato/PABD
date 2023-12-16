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
  res.render('cadastroFuncao', {resultado: {}});
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

router.get('/edit/:id', function(req, res) {
  let id = req.params.id;
  let cmd = "SELECT idFuncao, funcao FROM tbfuncao WHERE idFuncao = ?;";
  
  db.query(cmd, [id], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
  res.render('cadastroFuncao', {resultado: listagem[0]});
  });
});

router.put('/edit/:id', function(req, res) {
  let id = req.params.id;
  let funcao = req.body.funcao;
  
  let cmd = "UPDATE tbfuncao SET funcao = ? WHERE idFuncao = ?;";
  db.query(cmd, [funcao, id], function(erro){
    if (erro){
    res.send(erro);
    }
      res.redirect(303, '/funcoes/listar');
  });
});

router.delete('/delete/:id', function(req, res) {
  let id = req.params.id;
  let cmd = "DELETE FROM tbfuncao WHERE idFuncao = ?;";
  db.query(cmd, [id], function(erro){
    if (erro){
      res.send(erro);
    }
    res.redirect(303, '/funcoes/listar');
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


module.exports = router;