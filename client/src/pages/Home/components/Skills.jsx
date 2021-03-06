import React, { useState } from 'react'
import './styles/Skills.sass';
import SkillsCard from './SkillsCard';
import { frontEnd, backEnd, devOps, design } from "./utils";

const Skills = ({ children }) => {
  const [ skillsContent, setSkillsContent ] = useState(null);


  return (
    <>
    <div className="section-container">
      <div id="skills-head">
        <h4 className="section-head">skills</h4>
      </div>
      <div id="skills-body">
          <div id="skills-list-container">
            <button className="skills-button left" onClick={() => setSkillsContent(frontEnd)}>Front End</button>
            <button className="skills-button left" onClick={() => setSkillsContent(backEnd)}>Back End</button>
            <button className="skills-button left" onClick={() => setSkillsContent(devOps)}>Dev Ops</button>
            <button className="skills-button left" onClick={() => setSkillsContent(design)}>Design</button>
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
