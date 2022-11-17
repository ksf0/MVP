const controllers = require('./controllers.js')
const express = require('express')

const router = express.Router()

router.get('/getrestaurants/:place_id', controllers.getNearbyRestaurants )

module.exports = router