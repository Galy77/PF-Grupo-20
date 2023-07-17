const { User, FirebaseUser } = require('../db');

const getUserBDD = async (req, res) => {
    const {email, password} = req.query;
    try {
        const userFound = User.find(user => user.email === email && user.password === password);
        if(userFound) return res.status(200).json(userFound);
        return res.status(500).send({message:"Usuario no registrado."});
    } catch (error) {
        return res.status(400).send(error.message)
    }
};


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