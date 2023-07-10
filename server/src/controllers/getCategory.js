const { Category } = require('../db');

const data = [
    { id: 1, name: 'muebles'},
    { id: 2, name: 'tecnologia'},
    { id: 3, name: 'electrodomesticos'},
    { id: 4, name: 'moda'},
    { id: 5, name: 'alimento y bebidas' },
    { id: 6, name: 'contruccion' },
    { id: 7, name: 'hobbies' },
    { id: 8, name: 'joyeria' }
]

const getCategory = async(req, res) => {
    try {
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