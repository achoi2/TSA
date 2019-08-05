const keys = require('../keys')
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
    iam_apikey: `${keys.apiKey}`,
});

const analyze_tweet = async (req, res) => {
    const tweet = req.body.tweet

    const toneParams = {
        tone_input: {'text': tweet},
        content_type: 'application/json'
    }
    
    try {
        // const data = await toneAnalyzer.tone(toneParams)
        // const analyzedTones = await data.document_tone.tones
        // analyzedTones.forEach((tone, i) => tone.num = i + 1)

        // res.send(JSON.stringify(analyzedTones))  
        // const arr = [{
        //     "score": 0.514253,
        //     "tone_id": "sadness",
        //     "tone_name": "Sadness",
        //     "num": 1
        // }, {
        //     "score": 0.88939,
        //     "tone_id": "tentative",
        //     "tone_name": "Tentative",
        //     "num": 2
        // }]
        res.send([])
         
    } catch(e) {
        res.send(e)
    }
} 

module.exports = {
    analyze_tweet
}