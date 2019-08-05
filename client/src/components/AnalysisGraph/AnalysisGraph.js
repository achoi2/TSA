import React, { Component } from 'react'
import { connect } from 'react-redux'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory'


class AnalysisGraph extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tones: []
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) return this.setState({ tones: this.props.tones })
    }
    
    render() {
        if (this.state.tones === null) {
            return <div>{"Tones do not exist. Write another Sentence"}</div>
        } else {
            return (
            <div>
                <VictoryChart style={{ parent: { height: "2em" }}} height={340} width={600} domainPadding={20} theme={VictoryTheme.material}>
                    <VictoryAxis tickFormat={["joy", "fear", "sadness", "anger", "analytical", "confident", "tentative"]}/>
                    <VictoryAxis dependentAxis tickFormat={[.1, .2, .3, .4, .5, .6, .7, .8, .9, 1.0 ]}/>
                    <VictoryBar data={this.state.tones} x="tone_id" y="score"  />
                </VictoryChart>
            </div>
        )
        }  
    }
}

const mapStateToProps = state => ({
    tones: state.tones
})


export default connect(mapStateToProps)(AnalysisGraph)