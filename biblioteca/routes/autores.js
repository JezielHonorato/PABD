let express = require('express');
let db = require('../utils/db')
let router = express.Router();

/* Outras rotas definidas anteriormente... */
router.get('/listar', function(req, res) {
  db.query('SELECT IdAutor, NoAutor, NoNacionalidade FROM TbAutor INNER JOIN tbNacionalidade ON TbAutor.IdNacionalidade = tbNacionalidade.IdNacionalidade;', [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.render("autores-lista", {resultado: listagem});
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

/*Rota para excluir dados de autor*/
router.delete('/delete/:id', function(req, res) {
  let id = req.params.id;
  let cmd = "DELETE FROM TbAutor WHERE IdAutor = ?;";
  db.query(cmd, [id], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.redirect(303, '/autores/listar');
  });
});
module.exports = router;