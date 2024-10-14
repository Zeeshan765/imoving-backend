const Adminlogin = require('./auth/login')
const destroy = require('./users/destroy')
const list = require('./users/list')
const show = require('./users/show')
const update = require('./users/update')
const shiplist = require('./shipment/list')
const shipshow = require('./shipment/show')
const shipupdate = require('./shipment/update')


module.exports = {
    Adminlogin,
    destroy,
    show,
    update,
    list,
    shiplist,
    shipshow,
    shipupdate
}