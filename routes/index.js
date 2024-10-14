require('express-async-errors')
const express = require('express')
const authRouter = require('./auth')
const adminRouter = require('./admin')
const error = require('../middleware/error')


const router = express.Router()


router.use('/auth', authRouter)
router.use('/admin', adminRouter)
router.use(error)



module.exports = router