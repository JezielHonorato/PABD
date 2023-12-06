let express = require('express');
let router = express.Router();
let db = require('../utils/db');

router.get('/listar', function(req, res) {
  let cmd = 'SELECT idEspecie, especie FROM tbespecie ORDER BY especie';
  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.render('listarEspecie',{resultado: listagem});
  });
});

router.get('/cadastrar', function(req, res){
  res.render('cadastroEspecie');
});

router.post("/cadastrar", function (req, res, next) {
  let especie = req.body.especie;
  let cmd = "INSERT INTO tbespecie (especie) VALUES (?);";
  db.query( cmd, [especie], function (erro) {
    if (erro) {
      res.send(erro);
    }
    res.redirect("/especies/listar");
    }
  );
});

router.delete('/especies/:id', function(req, res) {
  let id = req.params.id;
  let cmd = "DELETE FROM tbespecie WHERE idEspecie = ?;";
  db.query(cmd, [id], function(erro){
    if (erro){
      res.send(erro);
    }
    res.redirect(303, '/especies/listar');
  });
});

router.get('/json', function(req, res) {
  let cmd = 'SELECT idEspecie, especie FROM tbespecie ORDER BY especie';
  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.json({resultado: listagem});
  });
});

module.exports = router;