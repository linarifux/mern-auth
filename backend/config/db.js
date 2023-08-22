const mongoose = require('mongoose')

const mongoUrl = process.env.MONGO_URI

const conn = async () => {
    try {
        const con = await mongoose.connect(mongoUrl)
        console.log('MongoDB Connected...', con.connection.host);
    } catch (error) {
        console.log('Error while connecting to MongoDB');
    }
}

module.exports = conn