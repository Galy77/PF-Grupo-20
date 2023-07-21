const { Category } = require('../db'); 

const putCategory = async(req,res) => {

  const { id } = req.params; 
  const { status } = req.body;

  try {
    const category = await Category.findByPk(id);
    
    if (!category) {
      return res.status(404).json({ error: 'Categoria no encontrada' });
    }

    category.status = status;
    await category.save();

    return res.status(200).json(category);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error del servidor' });
  }
}


module.exports = {
    putCategory
}
