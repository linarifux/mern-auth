const { User } = require("../models/userModel")

const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save()
        res.status(201).json({ success: true, data: newUser })
    } catch (error) {
        res.status(400).json({ success: false, error })
    }
}

module.exports = {
    createUser,
}