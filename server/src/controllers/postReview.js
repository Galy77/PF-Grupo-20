const { Reviews, Product, User } = require("../db");

const postReview = async (req, res) => {
  const { stars, coment, id_product, id_user} = req.body;
  try {
    if(stars&&coment&&id_product&&id_user){
      const newReview = {
          stars,
          coment
      };
  
      const createReview = await Reviews.create(newReview);
      const product = await Product.findByPk(id_product)
      const user = await User.findByPk(id_user)
      await createReview.setProduct(product)
      await createReview.setUser(user)
      return res.status(200).json({message:'Review creada correctamente'});
    }
  } catch (error) {
    return res.status(404).send({ error: error.message })
  }
};
const removeReview = async (req, res) => {
  const { id_product, id_user } = req.query;
  try {
    const review = await Reviews.findOne({
      where: {
        id_product: id_product,
        id_user: id_user
      }
    });
    if(!review){
      return res.status(404).json({ message: 'La review no fue encontrada para este usuario y producto.' });
    }
    await review.destroy()
    return res.status(200).json({ message: 'Review eliminada correctamente.' });
  } catch (error) {
    return res.status(404).send({ error: error.message })
  }
};
const getUserReviewsById = async (req, res) => {
  const { id } = req.params;
  try {
    const reviews = await Reviews.findAll({
      where: {
        id_user: id
      }
    });
    if(!reviews){
      return res.status(404).json({ message: 'La review no fue encontrada para este usuario y producto.' });
    }
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(404).send({ error: error.message })
  }
};

module.exports = {
  postReview,
  removeReview,
  getUserReviewsById
};
