
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        direction_shipping: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING            
        },
        role: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue:1
          },
        /**para marcar status 0 = no visible 1 = visible */

        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue:1

    
          }

    }, { timestamps: false })

    return User;
};