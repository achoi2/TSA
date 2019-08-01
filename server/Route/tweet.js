const keys = require('../keys')
const fetch = require('node-fetch');
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
        // const analyzedTone = await JSON.stringify(data, null, 2)
        res.send({
            "document_tone": {
                "tones": [{
                        "score": "0.931034",
                        "tone_id": "fear",
                        "tone_name": "Fear"
                    },
                    {
                        "score": "0.916667",
                        "tone_id": "sadness",
                        "tone_name": "Sadness"
                    },
                    {
                        "score": "1",
                        "tone_id": "anger",
                        "tone_name": "Anger"
                    }
                ]
            }
        })
    } catch(e) {
        res.send(e)
    }
    
} 

module.exports = {
    analyze_tweet
}