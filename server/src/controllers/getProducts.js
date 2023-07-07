const { Product, Category } = require('../db');

const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll({
            include: Category
        });

        return res.status(200).json(products);
    } catch (error) {
        return res.status(404).send({ message: error.message })                
    }
};

module.exports = {
    getProducts
}