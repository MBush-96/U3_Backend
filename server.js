const express = require('express')
const app = express()
const rowdy = require('rowdy-logger')
const routesReport = rowdy.begin(app)
const PATH = require('path')
const { Route } = require('express')
const userRoutes = require('./routes/userRoutes')
const subRedditRoutes = require('./routes/subRedditRoutes')
const postRoutes = require('./routes/postRoutes')

app.use(express.json())
app.use(require('cors')())

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
    routesReport.print()
})

app.use('/user', userRoutes)
app.use('/subreddit', subRedditRoutes)
app.use('/post', postRoutes)