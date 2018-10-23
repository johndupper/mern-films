// hide database url
require('dotenv').config()

const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const apiRoutes = require('./server/routes/routes')

const PORT = process.env.PORT || 5000
const DB_URL = process.env.MONGO_DB_URL

// uncaught exception terminates process w/ non-zero exit code
if (!DB_URL) throw Error('no database url provided')

// express config
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'client/build')))
app.use('/', apiRoutes)

app.get('*', (req, res) => {
  const relPath = process.env.NODE_ENV === 'production'
    ? '/client/build/index.html'
    : '/client/public/index.html'
  res.sendFile(path.join(__dirname, relPath))
})

app.listen(PORT, () => {
  console.log(`express api running on port: ${PORT}`)
})

// mongoose config
const dbConfig = { useNewUrlParser: true }

mongoose.connect(DB_URL, dbConfig)
  .then(() => console.log('mongoDB connection established'))
  .catch(error => console.error(`unable to connect to mongoDB: ${error.message}`))
