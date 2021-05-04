const models = require('../models')
const postController = require('./postController')
const commentController = {}

commentController.newComment = async (req, res) => {
    try {
        const comment = await models.comment.create({
            body: req.body.body,
            userId: req.body.userId,
            postId: req.body.postId,
            numlikes: 0,
            numdislikes: 0
        })
        res.json({comment})
    } catch (error) {
        res.json({error: error.message})
    }
}

commentController.getAllComments = async (req, res) => {
    try {
        const comments = await models.comment.findAll()
        res.json({comments})
    } catch (error) {
        res.json({error: error.message})
    }
}

commentController.getCommentsByPostId = async (req, res) => {
    try {
        const comments = await models.comment.findAll({
            where: {
                postId: req.params.id
            }
        })
        res.json({comments})
    } catch (error) {
        res.json({error: error.message})
    }
}

module.exports = commentController