const { DataTypes } = require('sequelize');
const { User } = require('./User');

module.exports = (sequelize) => {
    const Order = sequelize.define('Order', {
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
        order_shipping: {
            type: DataTypes.STRING,
            allowNull: false
        },
        order_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // order_date: {
        //     type: DataTypes.DATE,
        //     allowNull: false
        // },
        order_status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Order;
};