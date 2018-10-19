// hide database url
require('dotenv').config()

const path = require('path')
const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000
const MONGO_DB_URL = process.env.MONGO_DB_URL

// express config
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// serve react static files
app.use(express.static(path.join(__dirname, 'client/build')))

// resolve invalid urls
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`express api listening on port ${PORT}`)
})

// mongoose config
const dbConfig = { useNewUrlParser: true }

mongoose.connect(MONGO_DB_URL, dbConfig)
  .then(() => { console.log('mongoDB connection established') })
  .catch(error => { console.error(`unable to create express api: ${error.message}`) })
