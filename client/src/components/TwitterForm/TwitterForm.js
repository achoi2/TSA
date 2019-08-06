import React from 'react'
import { connect } from 'react-redux'

const TwitterForm = (props) => {
    console.log(props)
    return (
        <div>
            <div>{props.tweet}</div>
            <button>Submit to Twitter</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    tweet: state.tweet
})

export default connect(mapStateToProps)(TwitterForm)