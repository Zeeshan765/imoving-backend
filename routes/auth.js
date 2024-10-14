const express = require('express')
const { register, login } = require('../controllers/api/v1/auth')


const app = express.Router()


app.post('/register', register)
app.post('/login', login)



module.exports = app