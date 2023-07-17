const {Product, User, Category} = require("../db")
const {Op} = require("sequelize");
const Reviews = require("../models/Reviews");
const axios = require("axios");

const getProducts = async (req, res) => {
  try {
    const categories = await Category.findAll();
    let i = 1
    const data = await Promise.all(
      categories.map(async (category) => {
        const categoryId = category.id;
        const results = await axios.get(
          `https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}`
        );
        const products = results.data.results;

        const minStock = 1;
        const maxStock = 200;
        const minRating = 0.5;
        const maxRating = 5;

        const transformedProducts = products.map(
          ({ id, title, price, thumbnail, attributes }) => {
            const randomStockNumber =
              Math.floor(Math.random() * (maxStock - minStock + 1)) + minStock;
            const randomRatingNumber =
              Math.round(Math.random() * (maxRating - minRating)) + minRating;
            
            const details = JSON.stringify(attributes);
            const obj = {
              id: i++,
              name: title,
              details: details,
              price: price,
              image: thumbnail,
              stock: randomStockNumber,
              rating: randomRatingNumber,
              category: categoryId
            };
            return obj;
          }
        );

        const createdProducts = await Product.bulkCreate(transformedProducts);
        await createdProducts.map((product) => product.addCategories(categoryId, { through: "product_category" }));
        return transformedProducts;
      })
    );

    res.status(200).json(data);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await Product.findByPk(id);
    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto por ID" });
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