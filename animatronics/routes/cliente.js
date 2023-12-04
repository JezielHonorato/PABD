let express = require('express');
let router = express.Router();
let db = require('../utils/db');

router.get('/listar', function(req, res) {
  let cmd = 'SELECT * FROM tbcliente ORDER BY cliente';
  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.render('listarCliente', {resultado: listagem});
  });
});

router.get('/cadastrar', function(req, res){
  res.render('cadastroCliente');
})

router.get('/json', function(req, res) {
  let cmd = 'SELECT idCliente, cliente FROM tbcliente ORDER BY cliente';
  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.json({resultado: listagem});
  });
});

module.exports = router;