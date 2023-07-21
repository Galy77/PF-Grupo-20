const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Category', {
        id: {
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        /**para marcar status 0 = no visible 1 = visible */
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue:1
        },
        // description: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // }
        image: {
            type:DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false })
};