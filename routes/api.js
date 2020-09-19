const router = require('express').Router()
const middlewares = require('./middlewares')
const apiUsers = require('./api/users')

//router.use('/otracosa', middlewares.checkToken, otraRuras)
router.use('/users', apiUsers)
 
module.exports = router