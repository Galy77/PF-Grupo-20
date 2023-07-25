const { User, Product, Cart } = require("../db");

const postCart = async (req, res) => {
  const { id_user , product_cart} = req.body;
  try {
    const user = await User.findByPk(id_user);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    const nuevoCarrito = await Cart.create({
        id_user
    });

    await user.setCart(nuevoCarrito);
    //product
    await nuevoCarrito.addProduct(product_cart)

    return res.status(200).json();

  } catch (error) {
    return res.status(404).send({ error: error.message })
  }
};
const getCartById = async (req, res) => {
    try {
        const { id } = req.params
        const cart = await Cart.findByPk(id,{
            include:Product
        })
        if(cart) return res.status(200).json(cart)
        return res.status(200).json({response:"no hay carrito"})
    } catch (error) {
        return res.status(404).send({ error: error.message })
    }
}
const putCartById = async (req, res) => {
    try {
        const { id } = req.params
        const { productsToAdd, productsToRemove } = req.body
        const cart = await Cart.findByPk(id)
        if (!cart) {
            return res.status(404).json({ error: 'Producto no encontrado' });
          }

        // Agregar los productos al carrito
        for (const productId of productsToAdd) {
            await cart.addProduct(productId);
        }
  
        // // Eliminar los productos del carrito
        for (const productId of productsToRemove) {
        if (cart) {
            await cart.removeProduct(productId);
        }
        }


        return res.status(200).json({res:cart})
    } catch (error) {
        return res.status(404).send({ error: error.message })
    }
}

module.exports = {
  postCart,
  getCartById,
  putCartById
};
