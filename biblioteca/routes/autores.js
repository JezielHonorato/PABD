let express = require('express');
let db = require('../utils/db')
let router = express.Router();

router.get('/listar', function(req, res) {
  let cmd = 'SELECT IdAutor, NoAutor, NoNacionalidade';
  cmd += ' FROM TbAutor AS a INNER JOIN TbNacionalidade AS n';
  cmd += ' ON a.IdNacionalidade = n.IdNacionalidade ORDER BY NoAutor';
  db.query(cmd, [], function(erro, listagem){

  if (erro){
    res.send(erro);
  }

  res.render('autores-lista', {resultado: listagem});
  });
});

router.get('/add', function(req, res) {
  res.render('autores-add')
});

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
});

module.exports = router;