const mongoose = require('mongoose')
const Campground = require('./models/campground')

mongoose
  .connect('mongodb://127.0.0.1:27017/YelpCamp')
  .then(() => {
    console.log('Mongo Connection open!')
  })
  .catch((err) => {
    console.log('Oh no mongo error!')
    console.log(err)
  })

const seedCampgrounds = [
  {
    name: 'Camp Anawana',
    description: 'an old campground that smells like socks.',
  },
  {
    name: 'Windmill Falls',
    description: 'A windmill set upon majestic falls.',
  },
  {
    name: 'Cliff Escape',
    description: 'Enjoy the vistas from this cliff-bound abode',
  },
]

Campground.insertMany(seedCampgrounds)
  .then((res) => console.log(res))
  .catch((e) => {
    console.log(e)
  })
