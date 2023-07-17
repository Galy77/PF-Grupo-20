const {  FirebaseUser, User } = require('../db');

const getUserBDD = async (req, res) => {
    const { email, password } = req.query;
    try {
        const users = await User.findAll();
        console.log(users)
        const userFounds = users.find(user => user.email === email && user.password === password);
        console.log(userFounds)
        // if (userFound) {
        //     return res.status(200).json([userFound]);
        // } else {
        //     return res.status(500).send({ message: "Usuario no registrado." });
        // }
        return res.status(200).json(userFounds)
    } catch (error) {
        return res.status(400).send(error.message);
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