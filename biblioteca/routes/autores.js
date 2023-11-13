var express = require('express');
var router = express.Router();
let db = require('../utils/db');

router.get('/cadastro-animatronic', function(req, res){
  res.render('cadastroAnimatronic');
});

router.get('/listar-animatronic', function(req, res) {
  let cmd = 'SELECT idanimatronic, nomeanimatronic, nomeespecie, nomefuncao FROM tbanimatronic AS a INNER JOIN tbfuncao As f ON f.idfuncao = a.idfuncao INNER JOIN tbespecie As e ON e.idespecie = a.idespecie ORDER BY nomeanimatronic';

  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    /* Criaremos a view autores-lista.ejs no próximo slide*/
    res.render('listar-animatronic', {resultado: listagem});
  });
});

module.exports = router;