const subRedditRoutes = require('express').Router()
const subRedditController = require('../controllers/subRedditController')

subRedditRoutes.get('/all', subRedditController.getAllSubReddits)
subRedditRoutes.get('/sr/:name', subRedditController.getSubByName)
subRedditRoutes.post('/create', subRedditController.create)
subRedditRoutes.post('/sr', subRedditController.getAllPosts)

module.exports = subRedditRoutes