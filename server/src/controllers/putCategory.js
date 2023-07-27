const { Category } = require('../db'); 

const putCategory = async(req,res) => {

  const { id } = req.params; 
  const { name, status } = req.body;
  let image;
  
  if (req.file) {
    image = req.file;
  }

  try {
    const category = await Category.findByPk(id);
    
    if (!category) {
      return res.status(404).json({ error: 'Categoria no encontrada' });
    }

    if(name){
      category.name = name;
    }

    if(image){
      const result = await cloudinary.uploader.upload(image.path, {
        folder: "products"
      });
      category.image = result.secure_url;
    }

    if(status){
      category.status = status;
    }

    await category.save();

    return res.status(200).json(category);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error del servidor' });
  }
}

module.exports = {
    putCategory
};
