const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('this is the root route')
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
