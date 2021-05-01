const postRoutes = require('express').Router()
const postController = require('../controllers/postController')

postRoutes.post('/create', postController.newPost)

module.exports = postRoutes