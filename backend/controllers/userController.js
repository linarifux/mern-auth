const { User } = require("../models/userModel")
const asyncHandler = require('express-async-handler')
const generateToken =  require('../utils/auth')


// create new user
// @/api/users
const createUser = asyncHandler( async (req, res) => {
    const {name, email, password} = req.body
    const userExist = await User.findOne({email})
    if(userExist){
        throw new Error('User Already Exists!')
    }
    const user = await User.create({
        name, email, password
    })
    if(!user){
        throw new Error('Invalid user data!')
    }
    generateToken(res, user._id)
    res.status(201).json({name, email})
})


// Login user
// @/api/users/login
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})

    if(user && (await user.comparePassword(password))){
        generateToken(res, user._id)
        res.status(200).json({
            name: user.name,
            email: user.email
        })
    }else{
        throw new Error('Invalid email or password')
    }
})

// Logout user
// @/api/users/logout
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        expires: new Date(0),
        httpOnly: true
    })
    res.status(200).json({message: 'User logged out!'})
})


// get a user profile
const getUserProfile = (req, res) => {
    res.status(200).json(req.user)
}


module.exports = {
    createUser,
    loginUser,
    logoutUser,
    getUserProfile
}