/* eslint-disable-next-line */
import React from 'react';
import './styles/TextSection.css';

const TextSection = ({ children, title }) => (
  <div className="section-container">
    { title ? (
      <div className="text-section-head-container">
        <h2 className="section-head">{title}</h2>
      </div>
    ) : null }
    <div className="text-section-body">
      {children}
    </div>
  </div>
);


export default TextSection;
