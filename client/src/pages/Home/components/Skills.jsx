import React from 'react'
import './styles/Skills.sass';

const Skills = ({ children }) => {

  return (
    <div className="section-container">
      <div id="skills-head">
        <h4 className="section-head">skills</h4>
      </div>
      <div id="skills-body">
        {children}
      </div>
    </div>
  )
}

Skills.propTypes = {

}

export default Skills
