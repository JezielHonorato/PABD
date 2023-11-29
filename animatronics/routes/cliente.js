let express = require('express');
let router = express.Router();
let db = require('../utils/db');

router.get('/cadastro-cliente', function(req, res){
  res.render('cadastroCliente');
})


router.get('/listar-cliente', function(req, res) {
  let cmd = 'SELECT * FROM tbcliente ORDER BY nomecliente';
  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.render('listar-cliente', {resultado: listagem});
  });
});

module.exports = router;