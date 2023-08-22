const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const {User} = require('../models/userModel')


const protect = asyncHandler(async (req, res, next) => {
    let token;

    token = req.cookies.jwt

    if(!token){
        throw new Error('Invalid Request. No Token!')
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded.userId).select('-password')
        next()
    } catch (error) {
        throw new Error('Invalid Token!')
    }
})

module.exports = {protect}