const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");


const Director = sequelize.define("Director", {
    director: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    age: {
        type: DataTypes.NUMBER
    }
})


module.exports = Director;