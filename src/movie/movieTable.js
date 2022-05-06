const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

const Movie = sequelize.define("Movie", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    actor: {
        type: DataTypes.STRING,
        defaultValue: "Not specified",
    },
});

const Director = sequelize.define("Director", {
    director: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
})

module.exports = {Movie, Director};