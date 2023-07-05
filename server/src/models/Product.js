const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Product', {
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
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        higth: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultvalue: {
                public_id: '',
                url: ''
            }
        },
        width: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        weigth: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // category: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // sku: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // }
    }, { timestamps: false })
};