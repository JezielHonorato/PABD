var express = require('express');
var router = express.Router();
let db = require('../utils/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//cadastro espécie-----------------------------------------------------
router.get('/cadastro-especie', function(req, res){
  res.render('cadastroEspecie');
});

router.get('/listar-especie', function(req, res) {
  let cmd = 'SELECT * FROM tbespecie ORDER BY nomeespecie';
  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    /* Criaremos a view autores-lista.ejs no próximo slide*/
    res.render('listar-especie', {resultado: listagem});
  });
});

//cadastro função-------------------------------------------------------
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


//cadastro cliente------------------------------------------------------
router.get('/cadastro-cliente', function(req, res){
  res.render('cadastroCliente');
})

//cadastro avaliação--------------------------------------------------
router.get('/cadastro-avaliacao', function(req, res){
  res.render('cadastroAvaliacao');
});

//cadastro animatronics--------------------------------------------------
router.get('/cadastro-animatronic', function(req, res){
  res.render('cadastroAnimatronic');
});

router.get('/listar-animatronic', function(req, res) {
  let cmd = 'SELECT idanimatronic, nomeanimatronic, nomeespecie, nomefuncao FROM tbanimatronic AS a ';
  cmd += 'INNER JOIN tbfuncao As f ON f.idfuncao = a.idfuncao ';
  cmd += 'INNER JOIN tbespecie As e ON e.idespecie = a.idespecie ';
  cmd += 'ORDER BY nomeanimatronic';

  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    /* Criaremos a view autores-lista.ejs no próximo slide*/
    res.render('listar-animatronic', {resultado: listagem});
  });
});

module.exports = router;