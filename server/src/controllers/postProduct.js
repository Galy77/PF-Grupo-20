const { Product } = require('../db');
const cloudinary = require('../utils/cloudinary');

const postProduct = async(req, res) => {

    const { name, description, price, CategoryId, stock, rating  } = req.body;       

    try {
        const image = req.file
        
        const result = await cloudinary.uploader.upload(image.path, {
            folder: "products"
        });
        
        const newProduct = {
            name,
            description,
            price,
            image: result.secure_url,
            stock,
            rating
        };
        console.log(newProduct)
        const createProduct = await Product.create(newProduct);

        await createProduct.addCategories(CategoryId);
        
        return res.status(200).send({message:"success"})

    } catch (error) {
        res.status(404).send(error)
    }
};

module.exports = {
    postProduct
};