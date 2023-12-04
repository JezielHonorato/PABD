let express = require('express');
let router = express.Router();
let db = require('../utils/db');

router.get('/listar', function(req, res) {
  let cmd = 'SELECT	idAvaliacao, avaliacao, cliente, animatronic FROM tbavaliacao AS av INNER JOIN tbanimatronics AS an ON av.idAnimatronic = an.idAnimatronic INNER JOIN tbcliente AS c ON av.idCliente = c.idCliente';
  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.render('listarAvaliacao', {resultado: listagem});
  });
});

router.get('/cadastrar', function(req, res){
  res.render('cadastroAvaliacao');
});

router.post("/cadastrar", function (req, res, next) {
  let animatronic = req.body.animatronic;
  let cliente = req.body.cliente;
  let avaliacao = req.body.avaliacao;
  let cmd = "INSERT INTO tbavaliacao (idAnimatronic, idcliente, avaliacao) VALUES (?, ?, ?);";
  db.query( cmd, [animatronic, cliente, avaliacao], function (erro) {
    if (erro) {
      res.send(erro);
    }
    res.redirect("/avaliacoes/listar");
    }
  );
});

module.exports = router;