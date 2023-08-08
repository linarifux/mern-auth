const express = require('express')
require('dotenv').config()
const db = require('./config/db')

const userRoute = require('./routes/userRoute')


const app = express()
const port = process.env.PORT || 8080

db()

// middlewares
app.use(express.json())

// user routes
app.use('/api/users', userRoute)

app.listen(port, () => {
    console.log('server started listening at port: ', port);
})

app.get('/', (req, res) => {
    res.status(200).json({success: true, message: 'hello express'})
})