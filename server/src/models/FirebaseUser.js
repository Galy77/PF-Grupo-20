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
    },
    { timestamps: false }
  );
};
