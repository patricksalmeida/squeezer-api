const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Squeezer.')
})

app.listen(port, () => {
  console.log(`Squeezer listening on port ${port}`)
})