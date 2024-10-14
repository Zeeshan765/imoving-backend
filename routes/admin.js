const express = require('express')
const { Adminlogin, destroy, update, show, list, shiplist, shipshow, shipupdate } = require('../controllers/api/v1/admin')
const admin = require('../middleware/admin')
const authorization = require('../middleware/authorization')


const app = express.Router()


app.post('/login', Adminlogin)
app.delete('/user/:_id', destroy)
app.get('/users', authorization, admin, list)
app.get('/user/:_id', authorization, admin, show)
app.put('/user/:_id', authorization, admin, update)
app.get('/shipments', authorization, admin, shiplist)
app.get('/shipment/:_id', authorization, admin, shipshow)
app.put('/shipment/:_id', authorization, admin, shipupdate)



module.exports = app