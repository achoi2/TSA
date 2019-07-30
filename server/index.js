const express = require('express')
const app = express()
const tweet = require('./Route/tweet')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// tweet
app.post('/tweet/analyze', tweet.analyze_tweet)

app.listen(3500, () => console.log('listening on 3500'))