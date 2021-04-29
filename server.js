const express = require('express')
const app = express()
const rowdy = require('rowdy-logger')
const userRoutes = require('./routes/userRoutes')
const routesReport = rowdy.begin(app)
const PATH = require('path')
const { Route } = require('express')

app.use(express.json())
app.use(require('cors')())

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
    routesReport.print()
})

app.use('/user', userRoutes)