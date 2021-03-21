/* eslint-disable-next-line */
import React, { useState } from 'react';
import './styles/Skills.sass';
import SkillsCard from './SkillsCard';
import { Link } from 'react-router-dom';
import {
  frontEnd, backEnd, devOps, design,
} from './utils';

const Skills = () => {
  const [skillsContent, setSkillsContent] = useState(null);

  return (
    <>
      <div className="section-container" id="skills-section">
        <div id="skills-head">
          <h4 className="section-head">skills</h4>
        </div>
        <div id="skills-body">
          <div id="skills-list-container">
            <Link to="/skill/front-end" className="skills-button" ><span className="left">Front End</span></Link>
            <Link to="/skill/back-end" className="skills-button" ><span className="left">Back End</span></Link>
            <Link to="/skill/dev-ops" className="skills-button" ><span className="left">Dev Ops</span></Link>
            <Link to="/skill/design" className="skills-button"><span className="left">Design</span></Link>
          </div>
        </div>
      </div>
      <SkillsCard content={skillsContent} setContent={setSkillsContent} />
    </>
  );
};

Skills.propTypes = {

};

export default Skills;
