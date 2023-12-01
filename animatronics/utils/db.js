const mysql = require('mysql'); //traz o pacote do mysql


const db = mysql.createConnection({ // constante db - cria conexão do msql e passa os parametros
    host: 'localhost', //endereço do site (nesse caso é essa máquina localhost)
    user: 'root', // usuario root
    password: '', 
    port: 3306,
    database: 'animatronics',
    multipleStatements: true //true = executa varios comandos ao mesmo tempo se pedir
});

db.connect((erro) => { //conectar
    if (erro) { //se gerar um erro
        throw erro; // mensagem de erro
    }
    console.log('Conectado ao BD...'); //senão conecta
});

global.db = db;
module.exports = db;