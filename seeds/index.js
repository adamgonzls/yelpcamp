const mongoose = require('mongoose')
const Campground = require('../models/campground')
const cities = require('./cities')
const { descriptors, places, descriptions } = require('./seedHelpers')

mongoose
  .connect('mongodb://127.0.0.1:27017/YelpCamp')
  .then(() => {
    console.log('Mongo Connection open!')
  })
  .catch((err) => {
    console.log('Oh no mongo error!')
    console.log(err)
  })

const seedDB = async () => {
  await Campground.deleteMany({})
  for (let i = 0; i < 50; i++) {
    const randomCityData = cities[Math.floor(Math.random() * cities.length)]
    const randomDescriptor =
      descriptors[Math.floor(Math.random() * descriptors.length)]
    const randomPlace = places[Math.floor(Math.random() * places.length)]
    const randomDescription =
      descriptions[Math.floor(Math.random() * descriptions.length)]
    const campground = new Campground({
      name: `${randomDescriptor} ${randomPlace}`,
      location: `${randomCityData.city}, ${randomCityData.state}`,
      description: randomDescription,
    })
    await campground.save()
  }
}

seedDB().then(() => {
  mongoose.connection.close()
})
