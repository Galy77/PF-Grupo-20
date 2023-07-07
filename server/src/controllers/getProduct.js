const { Product } = require('../db');

const getProducts = async (name) => {
  try {
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

    return request;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw error;
  }
};

const getProductById = async (id) => {
  try {
    const request = await Product.findByPk(id);
    return request;
  } catch (error) {
    console.error('Error al obtener el producto por ID:', error);
    throw error;
  }
};

module.exports = {
  getProductById,
  getProducts,
};
