export const analyzeTweet = (tweet) => async dispatch => {

    try {
        await fetch('/tweet/analyze', {
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