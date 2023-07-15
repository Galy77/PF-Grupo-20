const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Reviews', {
        id: {
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        stars: {
            type: DataTypes.STRING,
            allowNull: false
        },
        coment: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false })
};