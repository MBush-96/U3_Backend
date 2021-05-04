const models = require('../models')
const postController = {}

postController.newPost = async (req, res) => {
    try {
        const post = await models.post.create({
            title: req.body.postTitle,
            body: req.body.postBody,
            userId: req.body.userId,
            subredditId: req.body.subRedditId,
            numlikes: 0,
            numdislikes: 0
        })
        res.json({post})
    } catch (error) {
        res.json({error: error.message})
    }
}

postController.getPostById = async (req, res) => {
    try {
        const post = await models.post.findOne({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.json({post})
    } catch (error) {
        res.json({error: error.message})
    }
}

postController.liked = async (req, res) => {
    try {
        const post = await models.post.findOne({
            where: {
                id: req.body.postId
            }
        })
        post.update({
            numlikes: post.numlikes += 1
        })
        res.json({post})
    } catch (error) {
        res.json({error: error.message})
    }
}

postController.disliked = async (req, res) => {
    try {
        const post = await models.post.findOne({
            where: {
                id: req.body.postId
            }
        })
        post.update({
            numlikes: post.numlikes -= 1
        })
        res.json({post})
    } catch (error) {
        res.json({error: error.message})
    }
}

module.exports = postController