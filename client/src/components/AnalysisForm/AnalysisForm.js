import React from 'react'
import { analyzeTweet } from '../../core/actions/tweet'
import { connect } from 'react-redux'
import './AnalysisForm.css'

const AnalysisForm = (props) => {
    const onFormSubmit = (e) => {
        e.preventDefault()
        props.analyzeTweet(e.target.tweetText.value)
    }

    return(
        <div>
            <form onSubmit={onFormSubmit} className="analyze-form">
                <textarea type="text" placeholder="Analyze my tweet" name="tweetText"/>
                <button className="analyze-button">Analyze</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    analyzeTweet: (tweet) => dispatch(analyzeTweet(tweet))
})



export default connect(null, mapDispatchToProps)(AnalysisForm);