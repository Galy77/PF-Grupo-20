const { Product } = require('../db');
const cloudinary = require('../utils/cloudinary');

const putProduct = async (req, res) => {
  const { id } = req.params;
  const { status, stock, name, price, description, rating } = req.body;

  try {
    console.log({status: status, stock: stock, name: name, price: price, description: description, rating: rating})
    
    const product = await Product.findByPk(id);

    const image = req.file
    const result = await cloudinary.uploader.upload(image.path, {
       folder: "products"
    });       

    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
  
    if(name){
      product.name = name;
    }
    if(price){
      product.price = price;
    }
    if(stock){
      product.stock = stock;
    }
    if(description){
      product.description = description;
    }
    if(image){
      product.image = result.secure_url;
    }
    if(rating){
      product.rating = rating;
    }
    if(status){
      product.status = status;
    }
    await product.save();
    
    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error del servidor' });
  }
};

module.exports = {
  putProduct,
};

