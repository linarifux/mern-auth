const express = require('express')
const { createUser, loginUser, logoutUser, getUserProfile } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()


// create new user
router.post('/', createUser)

// Login user
router.post('/login', loginUser)

// logout user
router.post('/logout', logoutUser)

// get a profile and update a profile

router.get('/profile', protect, getUserProfile)

module.exports = router