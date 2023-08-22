const express = require('express')
require('dotenv').config()
const db = require('./config/db')

const userRoute = require('./routes/userRoute')
const errorHandler = require('./middleware/errorHandler')

const cookieParser = require('cookie-parser')


const app = express()
const port = process.env.PORT || 8080

db()

// middlewares
app.use(express.json())

// cookie parser
app.use(cookieParser())



// user routes
app.use('/api/users', userRoute)


// errorHandling Middlewares
app.use(errorHandler)

app.listen(port, () => {
    console.log('server started listening at port: ', port);
})

// app.get('/', (req, res) => {
//     res.status(200).json({ success: true, message: 'hello express' })
// })