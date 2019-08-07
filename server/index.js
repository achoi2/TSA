const express = require('express')
const app = express()
const tweet = require('./Route/tweet')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// tweet
app.post('/tweet/save', tweet.save_tweet)
app.post('/tweet/analyze', tweet.analyze_tweet)

app.listen(5000, () => console.log('listening on 5000'))