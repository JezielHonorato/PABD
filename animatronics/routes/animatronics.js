let express = require('express');
let router = express.Router();
let db = require('../utils/db');

router.get('/listar', function(req, res) {
  let cmd = 'SELECT idAnimatronic, animatronic, especie, funcao FROM tbanimatronics AS a INNER JOIN tbfuncao AS f ON a.idfuncao = f.idfuncao INNER JOIN tbespecie AS e ON a.idespecie = e.idespecie';

  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    /* Criaremos a view autores-lista.ejs no próximo slide*/
    res.render('listar-animatronic', {resultado: listagem});
  });
});


router.get('/cadastrar', function(req, res) {
  res.render('cadastroAnimatronic')
});
/*
router.post('/add', function(req, res) {
  let nome = req.body.name
  let nacionalidade = req.body.nacionalidade

  let cmd = 'INSERT INTO TbAutor (NoAutor, TdNacionalidade) VALUES (?, ?)';
  db.query(cmd, [nome, nacionalidade], function(erro){

  if (erro){
    res.send(erro);
  }

  res.redirect('/autores/listar');
  });
});*/


module.exports = router;