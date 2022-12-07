const Sequelize = require("sequelize");
const sequelize = new Sequelize('sistemadecadastro', 'root', 'ludovic', {
    host: "localhost",
    dialect: 'mysql'
});

/*
 DROP TABLE IF EXISTS `postagens`;
CREATE TABLE IF NOT EXISTS `postagens` (
    `id` INTEGER NOT NULL auto_increment , 
    `titulo` VARCHAR(255), `conteudo` TEXT, 
    `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, 
    PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): 
SHOW INDEX FROM `postagens`
*/

const Postagem = sequelize.define('postagens',{
    titulo:{
        type:Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT
    }
});

/*Postagem.sync({
    force:true
});*/

/*Postagem.create({
    titulo:"Meu titulo",
    conteudo:"Meu conteudo"
});*/

const Usuario = sequelize.define('usuarios',{
    nome:{
        type:Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
});

/*Usuario.sync({
    force:true
});*/

Usuario.create({
    nome:"Baldez",
    sobrenome:"Jr",
    idade:33,
    email:"baldezjr@gmail.com"
});
