const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Contacto = sequelize.define('Contacto', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false })

    return Contacto;
};