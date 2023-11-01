var express = require('express');
var router = express.Router();
let db = require('../utils/db'); //trazer o arquivo banco de dados

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//render = renderizador, joga pra uma view
//router = rota; tipo get
//requisição e resposta

router.get('/listar', function(req, res) { //get = exibir
  let cmd = 'SELECT IdAutor, NoAutor, NoNacionalidade '
  cmd = cmd + 'FROM tbAutor as a INNER JOIN TbNacionalidade as n ' 
  cmd = cmd + 'ON a.IdNacionalidade = n.IdNacionalidade ORDER BY NoAutor;' 

  db.query( cmd, [], function(erro, listagem){ //
    if(erro){ //se der erro, manda o erro na resposta
      res.send(erro)
    }
    res.render('autores-lista', {resultado: listagem}); //qual view quero renderizar?

  })
});

router.get('/add', function(req, res) {
    res.render('autores-add', {}); //qual view quero renderizar
  });


module.exports = router;