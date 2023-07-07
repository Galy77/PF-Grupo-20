const {Product} = require("../db")
const {Op} = require("sequelize")

const getProducts = async (req, res) => {
  try {
    const { name } = req.body;
    let request;

    if (name) {
      request = await Product.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
    } else {
      request = await Product.findAll();
    }

    res.status(200).json(request);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await Product.findByPk(id);
    res.status(200).json(request);
  } catch (error) {
    console.error('Error al obtener el producto por ID:', error);
    res.status(500).json({ error: 'Error al obtener el producto por ID' });
  }
};

module.exports = {
  getProductById,
  getProducts,
};