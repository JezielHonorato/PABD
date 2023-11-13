var express = require('express');
var router = express.Router();
let db = require('../utils/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cadastro-especie', function(req, res){
  res.render('cadastroEspecie');
});

router.get('/autores/listar', function(req, res) {
  let cmd = 'SELECT IdAutor, NoAutor, NoNacionalidade ';
  cmd += ' FROM TbAutor AS a INNER JOIN TbNacionalidade AS n';
  cmd += ' ON a.IdNacionalidade = n.IdNacionalidade';
  cmd += ' ORDER BY NoAutor';
  
  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.render('autores-lista', {resultado: listagem});
  });
});

module.exports = router;