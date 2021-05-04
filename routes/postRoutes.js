const postRoutes = require('express').Router()
const postController = require('../controllers/postController')

postRoutes.post('/create', postController.newPost)
postRoutes.post('/:id', postController.getPostById)
postRoutes.put('/liked', postController.liked)
postRoutes.put('/disliked', postController.disliked)

module.exports = postRoutes