const { Sequelize }  = require('sequelize');
const db = require('./db');

const Temp = db.define('temperatura', {
    valor1: {
        type: Sequelize.STRING
    },
    valor2: {
        type: Sequelize.STRING
    }
})

//Temp.sync({force: true});

module.exports = Temp;