import React from 'react';
import './styles/Work.sass';

const Work = ({ children }) => (
  <section>
    <div className="section-container" id="work-section">
      <div id="work-head">
        <h4 className="section-head">work</h4>
      </div>
      <div id="work-body">
        {children}
      </div>
    </div>
  </section>
);

export default Work;
