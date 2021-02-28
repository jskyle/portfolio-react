import React from 'react'
import './styles/Skills.sass';
import SkillsCard from './SkillsCard';

const Skills = ({ children }) => {


  const frontEnd = {
    title: "Front End",
    lists: [
      {
        title: "Javascript",
        items: [
          "React",
          "Angular",
          "Jest",
          "Redux",
          "ES6 / ES7",
          "Typescript",
        ],
      },
      {
        title: "CSS",
        items: [
          "SASS / LESS",
          "Bootstrap",
          "Foundation",
          "Semantic UI",
          "Materialize",
        ],
      },
      {
        title: "Tools",
        items: [
          "CLI",
          "Git",
          "Websocket",
          "Webpack",
        ],
      },
    ]
  }

  return (
    <>
    <div className="section-container">
      <div id="skills-head">
        <h4 className="section-head">skills</h4>
      </div>
      <div id="skills-body">
        {children}
      </div>
    </div>
      <SkillsCard content={frontEnd}/>
    </>
  )
}

Skills.propTypes = {

}

export default Skills
