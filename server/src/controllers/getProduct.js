const {Product, Category} = require("../db")
const productsData = require("../data/productsData")

const getProducts = async (req, res) => {
  try {
  const existingCategories = await Category.findAll();
  const productsDb = await Product.findAll({
    include:Category
  });

  console.log("productsDB------", productsDb.length)

  if (productsDb.length === 0) {
    const createdProducts = await Product.bulkCreate(productsData);
    await Promise.all(
      createdProducts.map(async (product) => {
        const productData = productsData.find((prod) => prod.name === product.name);
        if (productData) {
          const categoryName = productData.category;
          const category = existingCategories.find((cat) => cat.name === categoryName);
          if (category) {
            await product.addCategory(category);
          } else {
            console.log(`La categoría '${categoryName}' no existe en la base de datos.`);
          }
        }
      })
      );
            const filterProduct = createdProducts.filter(pro => pro.status === 1 )
            res.status(200).json(filterProduct);
    } else {
            const filterProduct = productsDb.filter(pro => pro.status === 1 )
            return res.status(200).json(filterProduct)
           
  }
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