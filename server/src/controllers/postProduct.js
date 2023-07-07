const { Product } = require('../db');
const cloudinary = require('../utils/cloudinary');

const postProduct = async(req, res) => {

    const { name, description, price, higth, width, weigth, CategoryId, stock  } = req.body;       

    try {
        const image = req.file

        const result = await cloudinary.uploader.upload(image.path, {
            folder: "products"
        });
        
        const newProduct = {
            name,
            description,
            price,
            higth,
            image: {
                public_id: result.public_id,
                url: result.secure_url
            },
            width,
            weigth,
            stock
        };

        const createProduct = await Product.create(newProduct);
        await createProduct.addCategories(CategoryId)

        return res.status(200).send({ message: 'Register success'})

    } catch (error) {
        res.status(404).send({ error: error.message })
    }
};

module.exports = {
    postProduct
};