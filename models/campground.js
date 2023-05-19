const mongoose = require('mongoose')
const Schema = mongoose.Schema

const campgroundSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
})

const Campground = mongoose.model('Campground', campgroundSchema)

module.exports = Campground
