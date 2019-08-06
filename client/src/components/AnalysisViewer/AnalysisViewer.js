import React from 'react'
import AnalysisForm from '../AnalysisForm/AnalysisForm'
import AnalysisGraph from '../AnalysisGraph/AnalysisGraph'
import TwitterForm from '../TwitterForm/TwitterForm'
import './AnalysisViewer.css'

const  AnalysisViewer = () => {
  return (
    <div className="viewer">
      <AnalysisForm className="analysis-form"/>
      <AnalysisGraph />
      <TwitterForm />
    </div>
  );
}

export default AnalysisViewer;
