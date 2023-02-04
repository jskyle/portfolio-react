import React from 'react';
import PropTypes from 'prop-types';
import './styles/Work.css';
import styled from 'styled-components';


const WorkSection = styled.div`
  margin-bottom: 10rem;

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    width: max-content;
    margin-left: 0rem;
    font-size: 7rem;
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
        <h4 className="section-head">work</h4>
      </div>
      <div id="work-body">
        {children}
      </div>
    </WorkSection>
);

Work.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Work;
