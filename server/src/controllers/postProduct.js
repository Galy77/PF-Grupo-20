const Product = require('../db');
const cloudinary = require('../utils/cloudinary');

const postProduct = async(req, res) => {
    const { name, description, price, higth, image, width, weigth, categoryId, stock  } = req.body;

    try {
        const result = await cloudinary.uploader.upload(image, {
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
        await createProduct.addCategory(categoryId)

        const allProducts = await Product.findAll()
        return res.status(200).json(allProducts)

    } catch (error) {
        res.status(404).send({ error: error.message })
    }
};

module.exports = postProduct;