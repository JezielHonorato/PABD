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
  res.render('cadastroCliente', {resultado:{}});
})

router.post("/cadastrar", function (req, res, next) {
  let cliente = req.body.cliente;
  let cpf = req.body.cpf;
  let cmd = "INSERT INTO tbcliente (cliente, cpf) VALUES (?, ?);";
  db.query( cmd, [cliente, cpf], function (erro) {
    if (erro) {
      res.send(erro);
    }
    res.redirect("/clientes/listar");
    }
  );
});

router.get('/edit/:id', function(req, res) {
  let id = req.params.id;
  let cmd = "SELECT idCliente, cliente, CPF FROM tbcliente WHERE idCliente = ?;";
  
  db.query(cmd, [id], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
  res.render('cadastroCliente', {resultado: listagem[0]});
  });
});

router.put('/edit/:id', function(req, res) {
  let id = req.params.id;
  let cliente = req.body.cliente;
  let CPF = req.body.cpf;
  
  let cmd = "UPDATE tbcliente SET cliente = ?, CPF = ? WHERE idCliente = ?;";
  db.query(cmd, [cliente, CPF, id], function(erro){
    if (erro){
    res.send(erro);
    }
      res.redirect(303, '/clientes/listar');
  });
});

router.delete('/delete/:id', function(req, res) {
  let id = req.params.id;
  let cmd = "DELETE FROM tbcliente WHERE idCliente = ?;";
  db.query(cmd, [id], function(erro){
    if (erro){
      res.send(erro);
    }
    res.redirect(303, '/clientes/listar');
  });
});

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