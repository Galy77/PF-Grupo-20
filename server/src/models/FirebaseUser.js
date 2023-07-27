const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "FirebaseUser",
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
      email:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      phone: {
        type: DataTypes.STRING,
        
      },
      direction_shipping: {
          type: DataTypes.STRING,
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
    },
    { timestamps: false }
  );
};
