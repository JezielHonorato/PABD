let express = require('express');
let router = express.Router();
let db = require('../utils/db');

router.get('/listar', function(req, res) {
  let cmd = 'SELECT idAnimatronic, animatronic, especie, funcao FROM tbanimatronics AS a INNER JOIN tbfuncao AS f ON a.idfuncao = f.idfuncao INNER JOIN tbespecie AS e ON a.idespecie = e.idespecie';

  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.render('listarAnimatronic', {resultado: listagem});
  });
});


router.get('/cadastrar', function(req, res) {
  res.render('cadastroAnimatronic', {resultado: {}})
});

router.post("/cadastrar", function (req, res) {
  let animatronic = req.body.animatronic;
  let especie = req.body.especie;
  let funcao = req.body.funcao;
  let cmd = "INSERT INTO tbanimatronics (animatronic, idespecie, idfuncao) VALUES (?, ?, ?);";
  db.query( cmd, [animatronic, especie, funcao], function (erro) {
    if (erro) {
      res.send(erro);
    }
    res.redirect("/animatronics/listar");
    }
  );
});

router.get('/edit/:id', function(req, res) {
  let id = req.params.id;
  let cmd = "SELECT idAnimatronic, animatronic, idFuncao, idEspecie  FROM tbanimatronics WHERE idAnimatronic = ?;";
  
  db.query(cmd, [id], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
  res.render('cadastroAnimatronic', {resultado: listagem[0]});
  });
});

router.put('/edit/:id', function(req, res) {
  let id = req.params.id;
  let especie = req.body.especie;
  let funcao = req.body.funcao;
  let animatronic = req.body.animatronic;
  
  let cmd = "UPDATE tbAnimatronics SET animatronic = ?, idEspecie = ?, idFuncao = ? WHERE idAnimatronic = ?;";
  db.query(cmd, [animatronic, especie, funcao, id], function(erro){
    if (erro){
    res.send(erro);
    }
      res.redirect(303, '/animatronics/listar');
  });
});

router.delete('/delete/:id', function(req, res) {
  let id = req.params.id;
  let cmd = "DELETE FROM tbanimatronics WHERE idAnimatronic = ?;";
  db.query(cmd, [id], function(erro){
    if (erro){
      res.send(erro);
    }
    res.redirect(303, '/animatronics/listar');
  });
});

router.get('/json', function(req, res) {
  let cmd = 'SELECT idAnimatronic, animatronic FROM tbanimatronics ORDER BY animatronic';
  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.json({resultado: listagem});
  });
});


module.exports = router;