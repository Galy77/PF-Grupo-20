const { User } = require('../db'); 

const putUser = async(req,res) => {

  const { id } = req.params; 
  const { status } = req.body;

  try {
    const usuario = await User.findByPk(id);
    
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    usuario.status = status;
    await usuario.save();

    return res.status(200).json(usuario);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error del servidor' });
  }
}


module.exports = {
  putUser
}
