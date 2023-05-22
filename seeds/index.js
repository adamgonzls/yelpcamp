const mongoose = require('mongoose')
const Campground = require('../models/campground')
const cities = require('./cities')
const { descriptors, places, descriptions } = require('./seedHelpers')
require('dotenv').config()
UNSPLASH_API_URL =
  'https://api.unsplash.com/collections/9046579/photos?per_page=50'

mongoose
  .connect('mongodb://127.0.0.1:27017/YelpCamp')
  .then(() => {
    console.log('Mongo Connection open!')
  })
  .catch((err) => {
    console.log('Oh no mongo error!')
    console.log(err)
  })

async function getPhotos() {
  const response = await fetch(UNSPLASH_API_URL, {
    method: 'GET',
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
  })
  const photos = await response.json()
  return photos
}

const seedDB = async () => {
  await Campground.deleteMany({})
  const photosFromAPI = await getPhotos().then((photos) => {
    return photos
  })

  for (let i = 0; i < 50; i++) {
    const randomCityData = cities[Math.floor(Math.random() * cities.length)]
    const randomImage =
      photosFromAPI[Math.floor(Math.random() * photosFromAPI.length)].urls
        .regular
    const randomDescriptor =
      descriptors[Math.floor(Math.random() * descriptors.length)]
    const randomPlace = places[Math.floor(Math.random() * places.length)]
    const randomDescription =
      descriptions[Math.floor(Math.random() * descriptions.length)]
    const campground = new Campground({
      name: `${randomDescriptor} ${randomPlace}`,
      image: `${randomImage}`,
      price: 99,
      location: `${randomCityData.city}, ${randomCityData.state}`,
      description: randomDescription,
    })
    await campground.save()
  }
}

seedDB().then(() => {
  mongoose.connection.close()
})
