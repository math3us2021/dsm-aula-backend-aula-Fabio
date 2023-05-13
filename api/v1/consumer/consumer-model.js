const Sequelize = require('sequelize');
const db = require('../../../config/db');
const { allow } = require('joi');

const Consumer = db.define('consumer', { //nome da tabela no sistema
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'nome'
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'cidade'
    }
},{
    timestamps: false,
    tableName: 'cliente' //nome da tabela no banco
});

module.exports = Consumer;