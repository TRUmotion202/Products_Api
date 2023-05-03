const express = require("express")

const { port } = require('../config')
const cors = require('cors')
const initModels = require('./models/initModels')
require('dotenv').config()

const productsRouter = require('./products/products.router')
const db = require('./utils/database')
const app = express() 

db.authenticate()
    .then(() => console.log('Database Authenticate'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('Database Synced'))
    .catch(err => console.log(err))

initModels()

app.use(express.json())
app.use(cors()) 

app.get('/', (req, res) => {
    res.json({ message: 'Server OK' })
})

app.use('/', productsRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})