const Sequelize = require("sequelize");

//conexao mysql
const sequelize = new Sequelize('blog', 'root', 'ludovic', {
    host: "localhost",
    dialect: 'mysql',
    query:{raw:true}
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}