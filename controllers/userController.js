const models = require('../models')
const userController = {}


userController.signup = async (req, res) => {
    try {
        const user = await models.user.findOrCreate({
            where: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                karma: req.body.karma,
                profileimage: req.body.profileimage
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

userController.getAllPostsByUserId = async (req, res) => {
    const id = parseInt(req.body.userId)
    try {
        const post = await models.post.findAll({
            where: {
                userId: id
            }
        })
        res.json({post})
    } catch (error) {
        res.json({error: error.message})
    }
}

userController.getAllUsers = async (req, res) => {
    try {
        const users = await models.user.findAll()
        res.json({users})
    } catch (error) {
        res.json({error: error.message})
    }
}


module.exports = userController