const axios = require('axios')
require('dotenv').config()

module.exports = {
  getCoords: (req, res) => {
    var getlatlng = {
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.params.place_id}&fields=geometry&key=${process.env.API_KEY}`,
      headers: {},
    }
    axios(getlatlng).then((results) => {
      res.status(200).json(results.data.result.geometry.location)
    })
  },
  getNearbyRestaurants: (req, res) => {
    const coords = req.params.coords
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coords}&radius=1500&type=restaurant&key=${process.env.API_KEY}`
      )
      .then((nearby) => {
        res.status(200).json(nearby.data.results)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  getNearbyActivities: (req, res) => {
    const coords = req.params.coords
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coords}&radius=1500&type=restaurant&key=${process.env.API_KEY}`
      )
      .then((nearby) => {
        res.status(200).json(nearby.data.results)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  getPhotos: (req, res) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${req.params.photo_reference}&key=${process.env.API_KEY}`
      )
      .then((result) => {
        res.send(JSON.stringify(result.data))
      })
  },
}
