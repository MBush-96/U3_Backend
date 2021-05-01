const models = require('../models')
const subRedditController = {}

subRedditController.create = async (req, res) => {
    try {
        const subreddit = await models.subreddit.create({
            name: req.body.name
        })
        res.json({subreddit})
    } catch (error) {
        res.json({error: error.message})
    }
}

subRedditController.getSubByName = async (req, res) => {
    try {
        const sub = await models.subreddit.findOne({
            where: {
                name: req.params.name
            }
        })
        res.json({sub})
    } catch (error) {
        res.json({error: error.message})
    }
}

subRedditController.getAllPosts = async (req, res) => {
    try {
        const posts = await models.post.findAll({
            where: {
                subredditId: req.body.subredditId
            }
        })
        res.json({posts})
    } catch (error) {
        res.json({error: error.message})
    }
}

subRedditController.getAllSubReddits = async (req, res) => {
    try {
        const subs = await models.subreddit.findAll()
        res.json({subs})
    } catch (error) {
        res.json({error: error.message})
    }
}

module.exports = subRedditController