const mongoose = require('mongoose')

const mongoUrl = process.env.MONGO_URI

const conn = async () => {
    try {
        await mongoose.connect(mongoUrl)
        console.log('MongoDB Connected...');
    } catch (error) {
        console.log('Error while connecting to MongoDB');
    }
}

module.exports = conn