const {Product, User, Category} = require("../db")
const {Op} = require("sequelize");
const Reviews = require("../models/Reviews");

const getProducts = async (req, res) => {
  try {
    const { name } = req.body;
    let request;

    if (name) {
      request = await Product.findAll({
        include: User,
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
    } else {
      request = await Product.findAll({
        include:[{
          model:User
        },{
          model:Category,
          attributes:['name']
        }
        ],
      });
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

const getReviewByIdProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await Product.findByPk(id);
    let reviews = await request.getReviews();
    res.status(200).json({reviews});
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto por ID' });
  }
};

module.exports = {
  getProductById,
  getProducts,
  getReviewByIdProduct
};