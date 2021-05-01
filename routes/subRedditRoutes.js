const subRedditRoutes = require('express').Router()
const subRedditController = require('../controllers/subRedditController')

subRedditRoutes.post('/create', subRedditController.create)
subRedditRoutes.get('/sr/:name', subRedditController.getSubByName)
subRedditRoutes.post('/sr/', subRedditController.getAllPosts)

module.exports = subRedditRoutes