export const analyzedTweet = (tones) => ({
    type: 'ANALYZED_TONES',
    tones
})

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
        
        if (anlayzed.length === 0 ) {
            dispatch(analyzedTweet(null))
        } else {
            dispatch(analyzedTweet(anlayzed))
        }
    } catch(e) {
        console.log(e)
    }
  
}