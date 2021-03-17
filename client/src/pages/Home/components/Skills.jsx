import React, { useState } from 'react'
import './styles/Skills.sass';
import SkillsCard from './SkillsCard';
import { frontEnd, backEnd, devOps, design } from "./utils";

const Skills = ({ children }) => {
  const [ skillsContent, setSkillsContent ] = useState(null);


  return (
    <>
    <div className="section-container" id="skills-section">
      <div id="skills-head">
        <h4 className="section-head">skills</h4>
      </div>
      <div id="skills-body">
          <div id="skills-list-container">
            <button className="skills-button" onClick={() => setSkillsContent(frontEnd)}><span className="left">Front End</span></button>
            <button className="skills-button" onClick={() => setSkillsContent(backEnd)}><span className="left">Back End</span></button>
            <button className="skills-button" onClick={() => setSkillsContent(devOps)}><span className="left">Dev Ops</span></button>
            <button className="skills-button" onClick={() => setSkillsContent(design)}><span className="left">Design</span></button>
          </div>
      </div>
    </div>
      <SkillsCard content={skillsContent} setContent={setSkillsContent} />
    </>
  )
}

Skills.propTypes = {

}

export default Skills
