import React from 'react';
import WorkObject from './WorkObject';
import { workHistory } from "../utils/content";

const Work = () => {
  
  return (
  <section id="work-section">
      <div>
        <h2 className="section-head">work</h2>
      </div>

    <div className='work-history-container'>
      {workHistory.map((project) => { 
        return (
          <WorkObject project={project}/>
        )})}
    </div>
  </section>
)};

export default Work;
