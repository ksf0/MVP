const controllers = require('./controllers.js')
const express = require('express')

const router = express.Router()

router.get('/getrestaurants/:coords', controllers.getNearbyRestaurants)
router.get('/getactivities/:coords', controllers.getNearbyActivities)
router.get('/getcoords/:place_id', controllers.getCoords)

module.exports = router
