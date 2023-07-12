const {DataTypes} = require('sequelize')
const conn = require('../db/conn')

const Task = conn.define('Task', {

    name:{
        type: DataTypes.STRING,
        required:true,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull:false
    },
    done:{
        type: DataTypes.BOOLEAN,
        required:true
    }
})

module.exports = Task;