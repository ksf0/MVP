const router = require('./router')

const express = require('express'),
  PORT = 5001,
  app = express()

app.use('/api', router)

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`))
