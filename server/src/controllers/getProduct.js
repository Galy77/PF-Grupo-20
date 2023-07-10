const {Product, User, Category} = require("../db")
const {Op} = require("sequelize")

const getProducts = async (req, res) => {
  try {
    const { name } = req.body;
    let request;

    if (name) {
      request = await Product.findAll({
        include: [User, Category],
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
    } else {
      request = await Product.findAll({ include: [User, Category]});
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
    res.status(500).json({ error: 'Error al obtener el producto por ID' });
  }
};

module.exports = {
  getProductById,
  getProducts,
};