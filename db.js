const Sequelize = require('sequelize');
const secret = require('./secret')

// 1. Creamos la base de datos
const sql = new Sequelize('quotes', 'root', secret.password, {
    host: 'localhost',
    dialect: 'mysql'
});

// 2. aca se inicializan los modelos de tablas
const Quote = sql.define('Quote', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quote: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// ahora sincronizamos el codigo con la DB
sql.sync()
    .then(() => {
        console.log('base de datos y tablas creadas');
    });

// se exporta la DB
module.exports = {
    Quote
}