const mongoose = require('mongoose')
const Schema = mongoose.Schema

const campgroundSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
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
