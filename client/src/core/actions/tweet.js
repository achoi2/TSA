export const analyzeTweet = (tweet) => async dispatch => {

    await fetch('/tweet/analyze', {
        method: 'Post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tweet })
    })
    
}