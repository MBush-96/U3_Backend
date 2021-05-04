const userRoutes = require('express').Router()
const userController = require('../controllers/userController')

userRoutes.post('/signup', userController.signup)
userRoutes.post('/login', userController.login)
userRoutes.get('/:id', userController.getUserById)
userRoutes.get('/all/u', userController.getAllUsers)
userRoutes.post('/posts', userController.getAllPostsByUserId)
userRoutes.put('/:id', userController.updateKarma)

module.exports = userRoutes