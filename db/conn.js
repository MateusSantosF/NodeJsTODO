const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'nodetodo'
});


try{
    sequelize.authenticate();
    console.log('Conexão com o banco realizada com sucesso')
}catch(err){
    console.error("Erro ao conectar-se com o banco de dados");
}

module.exports = sequelize;