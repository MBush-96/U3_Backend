const models = require('../models')
const postController = {}

postController.newPost = async (req, res) => {
    try {
        const post = await models.post.create({
            title: req.body.postTitle,
            body: req.body.postBody,
            userId: req.body.userId,
            subredditId: req.body.subRedditId
        })
        res.json({post})
    } catch (error) {
        res.json({error: error.message})
    }
}

module.exports = postController