const express = require('express')
const { createUser, loginUser, logoutUser, getUserProfile, updateUserProfile } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()


// create new user
router.post('/', createUser)

// Login user
router.post('/login', loginUser)

// logout user
router.post('/logout', logoutUser)

// get a profile and update a profile

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

module.exports = router