const { User, FirebaseUser } = require('../db');

const getUserBDD = async(req, res) => {
    const { email } = req.body;
    try {
        const user = User.findAll({where:{email:email}})
        return res.status(200).json(user)
    } catch (error) {
        res.status(404).send({ error: error.message })
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