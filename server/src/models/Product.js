const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          max: 5,
          min: 1,
        },
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      /**para marcar status 0 = no visible 1 = visible */
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:"1"
      }
    },
    { timestamps: false }
  );
};
