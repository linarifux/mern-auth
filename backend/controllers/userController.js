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
// @/api/users/profile
const getUserProfile = (req, res) => {
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email
    }

    res.status(200).json(user)
}


// update user profile
// type @put
// @/api/users/profile
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if(user){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email

        if(req.body.password){
            user.password = req.body.password
        }
        const updatedUser = await user.save()
        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email
        })
    }else{
        res.status(404)
        throw new Error('User not found!')
    }
})


module.exports = {
    createUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}