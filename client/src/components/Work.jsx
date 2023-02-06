import React from 'react';
import './styles/Work.css';
import styled from 'styled-components';
import WorkObject from './WorkObject';


const WorkSection = styled.div`
  margin-bottom: 10rem;
`;

const Work = () => {
  
  return (
  <WorkSection className="section-container" id="work-section">
      <div>
        <h2 className="section-head">work</h2>
      </div>

    <div className='work-history-container'>
      <WorkObject/>
    </div>
  </WorkSection>
)};

export default Work;
