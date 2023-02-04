import React from 'react';
import './styles/Work.css';
import styled from 'styled-components';
import WorkObject from './WorkObject';


const WorkSection = styled.div`
  margin-bottom: 10rem;

  ul {
    list-style: none;
    padding-left: 0;
  }

  h5 {
    width: max-content;
    margin-left: 0rem;
    font-size: 3rem;
  };

  @media screen and ( max-width: 991px) {
    li {
      font-size: 5rem;
    };
  };

  @media screen and ( max-width: 767px) {
    li {
      font-size: 4rem;
    };
  };

  @media screen and ( max-width: 549px) {
    li {
      font-size: 3rem;
    };
  };

  @media screen and ( max-width: 448px) {
    li {
      font-size: 2.5rem;
    };
  };
`;

const Work = ({ children }) => (
  <WorkSection className="section-container" id="work-section">
      <div id="work-head">
        <h2 className="section-head">work</h2>
      </div>

    <div className='work-history-container'>
      <WorkObject/>
    </div>
  </WorkSection>
);

export default Work;
