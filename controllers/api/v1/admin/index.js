const Adminlogin = require('./auth/login')
const destroy = require('./users/destroy')
const list = require('./users/list')
const show = require('./users/show')
const update = require('./users/update')
const shiplist = require('./shipment/list')
const shipshow = require('./shipment/show')
const shipupdate = require('./shipment/update')
const sendPromotion = require('./promotion/sendPromotion')
const movingCreate = require('./movingRates/create')
const movingList = require('./movingRates/list')
const movingShow = require('./movingRates/show')
const movingUpdate = require('./movingRates/update')
const movingDestroy = require('./movingRates/destroy')



module.exports = {
    Adminlogin,
    destroy,
    show,
    update,
    list,
    shiplist,
    shipshow,
    shipupdate,
    sendPromotion,
    movingCreate,
    movingList,
    movingShow,
    movingUpdate,
    movingDestroy
}