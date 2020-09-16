const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
  host: "127.0.0.1",
  user: 'root',
  password: '1qaz2wsx',
  port: 3306,
  database: 'management'
})

app.get('/', (req, res) => {
  // const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('inception', 'good movie');"
  // db.query(sqlInsert, (err, result) => {
  //   res.send('hello world');
  // })
});

app.listen(3001, () => {
  console.log('running on port 3001')
});