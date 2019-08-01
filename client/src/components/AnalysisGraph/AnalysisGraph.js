import React, { Component } from 'react';
import { connect } from 'react-redux'

class AnalysisGraph extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tones: []
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            this.setState({ tones: this.props.tones })
        }
    }
    
    
    render() {
        return (
            <div> 
              {this.state.tones.map(tone => 
                  <div key={tone.num}>
                    <li>{tone.score}</li>
                    <li>{tone.tone_id}</li>
                  </div>
              )}  
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tones: state.tones
})


export default connect(mapStateToProps)(AnalysisGraph)