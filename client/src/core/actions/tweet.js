export const analyzedTweet = (tones) => ({
    type: 'ANALYZED_TONES',
    tones
})

export const tweet_text = (tweet) => ({
    type: 'TWEET_TEXT',
    tweet
})

export const tweetText = (tweet) => dispatch => {
    dispatch(tweet_text(tweet))
}

export const saveTweet = (tweet) => async dispatch => {
    try {
        await fetch('/tweet/save', {
            method: 'Post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tweet
            })
        })
    } catch(e) {
        console.log(e)
    }
}

export const analyzeTweet = (tweet) => async dispatch => {
    try {
        const analyze = await fetch('/tweet/analyze', {
            method: 'Post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tweet
            })
        })
        const anlayzed = await analyze.json()
        
        if (anlayzed.length === 0) {
            dispatch(analyzedTweet(null))
        } else {
            dispatch(analyzedTweet(anlayzed))
        }
    } catch(e) {
        console.log(e)
    }
}

