const express = require('express')
const app = express()
const mysql = require('mysql')



app.get('/', (req, res) => {
  res.send('hello world');
})

app.listen(3001, () => {
  console.log('running on port 3001')
})