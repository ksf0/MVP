const controllers = require('./controllers.js')
const express = require('express')

const router = express.Router()

router.get('/getrestaurants/:coords', controllers.getNearbyRestaurants)
router.get('/getactivities/:coords', controllers.getNearbyActivities)
router.get('/getcoords/:place_id', controllers.getCoords)
router.get('/getphotos/:photo_ref', controllers.getPhotos)
router.get('/getrestaurantinfo/:place_id', controllers.getRestaurantInfo)
router.post('/saverestaurant', controllers.saveRestaurant)
router.get('/getsavedrestaurants/:user', controllers.getSavedRestaurants)
router.get('/keywordsearch/:coords/:keyword', controllers.keywordSearch)

module.exports = router
