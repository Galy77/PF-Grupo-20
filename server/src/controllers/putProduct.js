const putProduct = async (req, res) => {
  const { id } = req.params;
  const { status, stock, price, name } = req.body;

  try {
    const producto = await Product.findByPk(id);

    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    // Validar que status y stock sean números enteros antes de guardar
    // if (typeof status !== 'number' || typeof stock !== 'number' || Number.isInteger(status) || Number.isInteger(stock)) {
    //   return res.status(400).json({ error: 'Status y stock deben ser números enteros' });
    // }

    // producto.status = status;
    // producto.stock = stock;
    // await producto.save();
    console.log(status, stock, price, name);
    const newProduct = {
      name,
      description:producto.description,
      price,
      image:producto.image,
      stock,
      rating:producto.rating,
      status,
      Categories:producto.Categories,
    }

    console.log(newProduct);
    return res.status(200).json(newProduct);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error del servidor' });
  }
};

module.exports = {
  putProduct,
};

