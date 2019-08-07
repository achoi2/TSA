import React from 'react'
import AnalysisForm from '../AnalysisForm/AnalysisForm'
import AnalysisGraph from '../AnalysisGraph/AnalysisGraph'
import TwitterButtons from '../TwitterButtons/TwitterButtons'
import './AnalysisViewer.css'

const  AnalysisViewer = () => {
  return (
    <div className="viewer">
      <AnalysisForm className="analysis-form"/>
      <AnalysisGraph />
      <TwitterButtons />
    </div>
  );
}

export default AnalysisViewer;
