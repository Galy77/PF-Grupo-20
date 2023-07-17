const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Category', {
        id: {
            type:DataTypes.STRING,
            // autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // description: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // }
    }, { timestamps: false })
};