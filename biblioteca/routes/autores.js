var express = require('express');
var router = express.Router();
let db = require('../utils/db');

<<<<<<< HEAD
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cadastro-especie', function(req, res){
  res.render('cadastroEspecie');
});

router.get('/autores/listar', function(req, res) {
  let cmd = 'SELECT IdAutor, NoAutor, NoNacionalidade ';
  cmd += ' FROM TbAutor AS a INNER JOIN TbNacionalidade AS n';
  cmd += ' ON a.IdNacionalidade = n.IdNacionalidade';
  cmd += ' ORDER BY NoAutor';
  
=======
router.get('/cadastro-animatronic', function(req, res){
  res.render('cadastroAnimatronic');
});

router.get('/listar-animatronic', function(req, res) {
  let cmd = 'SELECT idanimatronic, nomeanimatronic, nomeespecie, nomefuncao FROM tbanimatronic AS a INNER JOIN tbfuncao As f ON f.idfuncao = a.idfuncao INNER JOIN tbespecie As e ON e.idespecie = a.idespecie ORDER BY nomeanimatronic';

>>>>>>> 42249f147f206daa8a751597c2c5c5c1221f60ef
  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
<<<<<<< HEAD
    res.render('autores-lista', {resultado: listagem});
=======
    /* Criaremos a view autores-lista.ejs no próximo slide*/
    res.render('listar-animatronic', {resultado: listagem});
>>>>>>> 42249f147f206daa8a751597c2c5c5c1221f60ef
  });
});

module.exports = router;