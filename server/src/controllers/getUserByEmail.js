const { User, FirebaseUser } = require('../db');

const getUserBDD = async (req, res) => {
    const { email, password } = req.query;
    try {
        const userFound = await User.findOne({ where: { email, password } });
        console.log("bdd user found",userFound)
        if (userFound) {
            return res.status(200).json(userFound);
        } else {
            return res.status(500).send({ message: "Usuario no registrado." });
        }
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

module.exports = { getUserBDD };


const getFirebaseUser = async(req, res) => {
    const { email } = req.body;
    try {
        const user = FirebaseUser.findAll({where:{email:email}})
        return res.status(200).json(user)
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
};

module.exports = {
    getUserBDD,
    getFirebaseUser
};