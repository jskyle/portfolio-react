import React from 'react'
import './styles/About.sass';
import PropTypes from 'prop-types'

const About = ({ children }) => {

  return (
    <div className="section-container">
        <div id="about-me-head">
          <h4 className="section-head">about</h4>
        </div>
        <div id="about-me-body">
            {children}
        </div>
      </div>
  )
}

About.propTypes = {

}

export default About
