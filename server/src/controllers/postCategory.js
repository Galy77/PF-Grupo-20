const { Category } = require("../db");

const postCategory = async (req, res) => {
  const { name, status } = req.body;
  try {
    const newCategory = {
        name,
        status,
    };
      
  
    const createCategory = await Category.create(newCategory);
    return res.status(200).json(createCategory);
    
  } catch (error) {
    return res.status(404).send({ error: error.message })
  }
};

module.exports = {
  postCategory
};
