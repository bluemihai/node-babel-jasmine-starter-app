'use strict'

const express = require('express')
const app = express()
const request = require('request')
const path = require('path')

app.set('port', (process.env.PORT || 3000))

let headers = {'User-Agent': 'MB'}
let uri = 'https://woodpecker-instagram-api.herokuapp.com/api/v1/locations'
let options = { headers, uri }

request(options, (error, response, body) => {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
})

app.use(
  express.static(path.join(__dirname, '/public'))
)

app.listen(app.get('port'), () => {
  console.log('Example app listening on port 3000!')
});
