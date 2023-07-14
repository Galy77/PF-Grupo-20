const { Product } = require('../db');
const cloudinary = require('../utils/cloudinary');

const postProduct = async (req, res) => {
  const { name, description, price, CategoryId, stock, rating } = req.body;

  try {
    const image = req.file;

    const result = await cloudinary.uploader.upload(image.path, {
        folder: 'products'
    });

    // const newName = Array.isArray(name) ? name[0] : name;
    // const newDescription = Array.isArray(description) ? description[0] : description;
    const url = result.secure_url;

    const newProduct = {
      name,
      description,
      price,
      image: url,
      stock,
      rating
    };
    
    const createProduct = await Product.create(newProduct);
    await createProduct.addCategories(CategoryId);

    return res.status(200).send({ message: 'Register success' });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = {
  postProduct
};
