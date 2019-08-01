const initalState = {
    tones: []
}

export default (state = initalState, action) => {
    switch(action.type) {
        case 'ANALYZED_TONES':
            return {
                ...state,
                tones: action.tones
            }
        
        default:
            return state
    }
}