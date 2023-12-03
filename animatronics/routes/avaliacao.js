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

module.exports = router;