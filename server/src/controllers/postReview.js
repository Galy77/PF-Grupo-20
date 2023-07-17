const { Reviews, Product } = require("../../../server/src/db");
const postReview = async (req, res) => {
  const { stars, coment, id_product} = req.body;
  try {
    const newReview = {
        stars,
        coment
    };

    const createReview = await Reviews.create(newReview);
    const product = await Product.findByPk(id_product)

    await createReview.setProduct(product)

    return res.status(200).json({message:'Review creada correctamente'});
  } catch (error) {
    return res.status(404).send({ error: error.message })
  }
};

module.exports = {
  postReview,
};
