const express = require('express')
const { Adminlogin, destroy, update, show, list, shiplist, shipshow, shipupdate, sendPromotion, movingCreate, movingList, movingShow, movingDestroy, movingUpdate } = require('../controllers/api/v1/admin')
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
app.post('/send-promotion', authorization, admin, sendPromotion)
app.post('/moving-rates', authorization, admin, movingCreate)
app.get('/moving-rates', authorization, admin, movingList)
app.get('/moving-rate/:id', authorization, admin, movingShow)
app.delete('/moving-rate/:id', authorization, admin, movingDestroy)
app.put('/moving-rate/:id', authorization, admin, movingUpdate)




module.exports = app