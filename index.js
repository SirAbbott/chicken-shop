require('dotenv').config()

const express = require('express')

const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./config/routes')

mongoose.connect('mongodb://localhost/chicken-shops')

app.use(
  bodyParser.json(),
  routes
)


app.listen(process.env.PORT, () => console.log(`Express is runnig on port ${process.env.PORT}`))