const models = require('../models')
const userController = {}


userController.signup = async (req, res) => {
    try {
        const user = await models.user.findOrCreate({
            where: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
        })
        res.json({user})
    } catch (error) {
        res.json({error: error.message})
    }
}

userController.login = async (req, res) => {
    try {
        console.log(req.body.email);
        const user = await models.user.findOne({
            where: {
                email: req.body.email,
            }
        })
        if(user.verifyPassword(req.body.password)) {
            res.json(user)
        }
    } catch (error) {
        res.json({error: error.message})
    }
}

userController.getUserById = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json({user})
    } catch (error) {
        res.json({error: error.message})
    }
}


module.exports = userController