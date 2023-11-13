var express = require('express');
var router = express.Router();
let db = require('../utils/db');

router.get('/listar', function(req, res) {
  let cmd = 'SELECT IdNacionalidade, NoNacionalidade FROM tbnacionalidade ORDER BY Nonacionalidade';
  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.json({resultado: listagem});
  });
});

module.exports = router;