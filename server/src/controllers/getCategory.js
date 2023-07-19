const { Category } = require('../db');
const axios = require("axios");
const categoriesData = require("../data/categoriesData")


const getCategory = async(req, res) => {
    try {
        const data = categoriesData;

        const category = await Category.findAll()
        if(category.length === 0){
            const categories = data.map((obj) => {
                return {
                    name: obj.name,
                    image: obj.img
                }
            })

            const createdCategories = await Category.bulkCreate(categories)
            return res.status(200).json(createdCategories)
        }
        return res.status(200).json(category)

    } catch (error) {
        res.status(404).send({ error: error.message })
    }
};

module.exports = getCategory;