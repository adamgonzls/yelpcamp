const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const Campground = require('./models/campground')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

// homepage show campgrounds
app.get('/', async (req, res) => {
  const campgrounds = await Campground.find({})
  res.render('index', { campgrounds })
})

// all campgrounds
app.get('/campgrounds', async (req, res) => {
  const campgrounds = await Campground.find({})
  res.render('campgrounds/index', { campgrounds })
})

mongoose
  .connect('mongodb://127.0.0.1:27017/YelpCamp')
  .then(() => {
    console.log('Mongo Connection open!')
  })
  .catch((err) => {
    console.log('Oh no mongo error!')
    console.log(err)
  })

app.listen(3000, () => {
  console.log('app is listening on port 3000')
})
