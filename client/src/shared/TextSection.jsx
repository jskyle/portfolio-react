/* eslint-disable-next-line */
import React from 'react';
import './styles/TextSection.css';
import PropTypes from 'prop-types';

const TextSection = ({ children, title }) => (
  <div className="section-container">
    { title ? (
      <div className="text-section-head-container">
        <h4 className="section-head">{title}</h4>
      </div>
    ) : null }
    <div className="text-section-body">
      {children}
    </div>
  </div>
);

TextSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextSection;
