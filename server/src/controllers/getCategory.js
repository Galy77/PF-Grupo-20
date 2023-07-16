const { Category } = require('../db');
const axios = require("axios");


const getCategory = async(req, res) => {
    try {
        const respawns = await axios.get("https://api.mercadolibre.com/sites/MLA/categories")
        const data = respawns.data;
        
        const category = await Category.findAll()
        if(category.length === 0){
            const categories = data.map((obj) => {
                return {
                    id: obj.id,
                    name: obj.name
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