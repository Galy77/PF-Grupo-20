const { Product } = require('../db'); // Asegúrate de importar el modelo adecuado

const putStockProduct = async(req,res) => {

  const { id } = req.params; // ID del producto
  const { stock } = req.body; // Nuevo valor de stock

  try {
    const product = await Product.findByPk(id);
    
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    product.stock = stock;
    await product.save();

    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error del servidor' });
  }
}


module.exports = {
    putStockProduct
}
