const Twit = require('twit')
const  { twitterAPI, twitterSecret, accessToken, accessSecret } = require('../keys')

var T = new Twit({
    consumer_key: twitterAPI,
    consumer_secret: twitterSecret,
    access_token: accessToken,
    access_token_secret: accessSecret
})

const post_tweet = async (req, res) => {
    const tweet = req.body.tweet

    try {
        const send = await T.post('statuses/update', {status: tweet})
        const data = send.json()
        console.log(data)
    } catch(e) {
        res.send(e)
    }
}

module.exports = {
    post_tweet
}