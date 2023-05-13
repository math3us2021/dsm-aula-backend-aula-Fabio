const { Sequelize } = require('sequelize');

const sequelizeConfig = {
    logging: console.log,  /// mostra o que esta acontecendo no banco de dados
    dialect: 'mysql',
    port: 3306,
    host: 'localhost',
    pool: 2,  /// numero de conexoes simultaneas
}
const sequelize = new Sequelize('aulaFabio', 'root', 'ma020490@' , sequelizeConfig);

module.exports = sequelize;

