import React, { Component } from 'react';
import { connect } from 'react-redux'

class AnalysisGraph extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tones: null
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            this.setState({ tones: this.props })
        }
    }
    
    
    render() {
        return (
            <div>
                graph
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tones: state.tones
})


export default connect(mapStateToProps)(AnalysisGraph)