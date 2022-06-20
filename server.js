require('dotenv').config()

const path = require('path')

const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
  console.log(`Serving index.html for: ${req.originalUrl}`)
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(process.env.PORT, () => {
  console.log(`Static server started and listening on port ${process.env.PORT}`)
})
