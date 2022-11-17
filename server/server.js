const router = require('./router')

const express = require('express'),
  PORT = 5001,
  app = express()

app.use('/api', router)

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'localhost:3000') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`))
