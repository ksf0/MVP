const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/nearme')

const { Schema } = mongoose

const restaurantsSchema = new Schema({
  user: String,
  restaurant: Object,
})

const Restaurant = mongoose.model('Restaurant', restaurantsSchema)

module.exports = Restaurant
