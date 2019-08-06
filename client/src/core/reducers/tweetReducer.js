const initalState = {
    tones: [],
    tweet: ''
}

export default (state = initalState, action) => {
    switch(action.type) {
        case 'ANALYZED_TONES':
            return {
                ...state,
                tones: action.tones
            }
        case 'TWEET_TEXT':
            return {
                ...state,
                tweet: action.tweet
            }
        
        default:
            return state
    }
}