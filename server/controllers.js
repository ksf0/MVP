const axios = require('axios')
require('dotenv').config()

module.exports = {
  getNearbyRestaurants: (req, res) => {
  var getlatlng = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.params.place_id}&fields=geometry&key=${process.env.API_KEY}`,
    headers: { }
  }
  axios(getlatlng)
  .then((latlng) => {
    const coords = latlng.data.result.geometry.location;
    axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coords.lat}%2C${coords.lng}&radius=1500&type=restaurant&key=${process.env.API_KEY}`)
    .then((nearby) => {
      res.status(200).json(nearby.data.results)
    })
  })
.catch(function (error) {
  console.log(error);
});
}
}