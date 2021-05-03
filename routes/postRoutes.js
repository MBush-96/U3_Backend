const postRoutes = require('express').Router()
const postController = require('../controllers/postController')

postRoutes.post('/create', postController.newPost)
postRoutes.put('/liked', postController.liked)

module.exports = postRoutes