const commentRoutes = require('express').Router()
const commentController = require('../controllers/commentController')

commentRoutes.post('/new', commentController.newComment)
commentRoutes.get('/all', commentController.getAllComments)
commentRoutes.post('/post/:id', commentController.getCommentsByPostId)

module.exports = commentRoutes