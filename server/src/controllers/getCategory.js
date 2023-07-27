const { Category } = require('../db');
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
            const filterCategory = createdCategories.filter(ca => ca.status === 1 )
            // console.log(filterCategory)
            return res.status(200).json(filterCategory)
        }
            const filterCategory = category.filter(ca => ca.status === 1)
            return res.status(200).json(filterCategory)

    } catch (error) {
        res.status(404).send({ error: error.message })
    }
};

module.exports = {
    getCategory
};