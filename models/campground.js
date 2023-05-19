const mongoose = require('mongoose')

const campgroundSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const Campground = mongoose.model('Campground', campgroundSchema)

module.exports = Campground
