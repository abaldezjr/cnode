const Sequelize = require("sequelize");
const sequelize = new Sequelize('sistemadecadastro', 'root', 'ludovic', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(function () {
    console.log("Conexao realizada com sucesso.");
}).catch(function (erro) {
    console.log("Falha ao se conectar: " + erro);
});
