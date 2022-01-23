const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'src/data/database.sqlite'
});

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso!');
}).catch(function(erro){
    console.log('Falha ao se conectar' + erro);
});

module.exports = sequelize;