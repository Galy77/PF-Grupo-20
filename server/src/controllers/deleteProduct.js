const {Product} = require("../db")
const {Op} = require("sequelize");
const axios = require("axios");

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const request = await Product.put({
            where:{
                id : id,
                
            },
            set:{
                status:0
            }
        });

        res.status(200).json(request);
      } catch (error) {
        res.status(500).json({ error: "Error al eliminar el producto por ID" });
      }
  };

  module.exports = {
    deleteProduct
  };