const express = require('express')
const { createUser } = require('../controllers/userController')
const router = express.Router()


// create new user
router.post('/', createUser)

module.exports = router