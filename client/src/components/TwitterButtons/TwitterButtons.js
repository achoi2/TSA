import React from 'react'
import { connect } from 'react-redux'
import { saveTweet } from '../../core/actions/tweet'
import './TwitterButtons.css'

const TwitterButtons = (props) => {
    
    const saveTweetHandler = () => {
        props.saveTweet(props.tweet)
    }

    return (
        <div className="twitter-buttons">
            <div className="twitter-text">{props.tweet}</div>
            <button>Submit to Twitter</button>
            <button className="savetweet-button" onClick={saveTweetHandler}>Save Tweet</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    saveTweet: (tweet) => dispatch(saveTweet(tweet))
})

const mapStateToProps = (state) => ({
    tweet: state.tweet
})

export default connect(mapStateToProps, mapDispatchToProps)(TwitterButtons)