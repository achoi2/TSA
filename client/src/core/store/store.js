import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import tweetReducer from '../reducers/tweetReducer'

export default () => {
    const store = createStore( 
    tweetReducer,
    applyMiddleware(reduxThunk))
    
    return store
}