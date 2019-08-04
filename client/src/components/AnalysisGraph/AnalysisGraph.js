import React, { Component } from 'react'
import { connect } from 'react-redux'
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory'


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
                <VictoryChart style={{ parent: { height: "2em" }}} height={200} width={200} domainPadding={null}>
                    <VictoryAxis tickFormat={["joy", "fear", "sadness", "anger", "analytical", "confident", "tentative"]}/>
                    <VictoryBar data={this.state.tones} x="tone_id" y="score"  />
                </VictoryChart>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tones: state.tones
})


export default connect(mapStateToProps)(AnalysisGraph)