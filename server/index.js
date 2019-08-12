const express = require('express')
const app = express()
const tweet = require('./Route/tweet')
const twitter = require('./Route/twitter')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// tweet
app.post('/tweet/save', tweet.save_tweet)
app.post('/tweet/analyze', tweet.analyze_tweet)

// twitter
app.post('/twitter/post', twitter.post_tweet)

app.listen(5000, () => console.log('listening on 5000'))