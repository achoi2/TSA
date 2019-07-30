const keys = require('../keys')
const fetch = require('node-fetch');
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
    iam_apikey: `${keys.apiKey}`,
});

const analyze_tweet = async (req, res) => {
    const tweet = (req.body.tweet)

    const toneParams = {
        tone_input: {'text': tweet},
        content_type: 'application/json'
    }

    console.log(toneParams.tone_input)

    toneAnalyzer.tone(toneParams)
        .then(toneAnalysis => {
            console.log(JSON.stringify(toneAnalysis, null, 2))
        })
        .catch(err => {
            console.log('error:', err);
        });
} 

module.exports = {
    analyze_tweet
}