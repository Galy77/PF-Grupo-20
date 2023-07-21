const { DataTypes } = require('sequelize');
const { User } = require('./User');

module.exports = (sequelize) => {
    const Payments = sequelize.define('Payments', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_product:{
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },{ timestamps: false })

    return Payments;
};