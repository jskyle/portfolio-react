import React from 'react'
import './styles/SkillsCard.sass';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SkillsCard = ({ content }) => {

  const {title, lists} = content;

  return (
    <div className="skills-card-container">
      <div id="skills-card-head">
        <h1 className="skills-card-title">{title}</h1>
        <button className="close-button">
          <FontAwesomeIcon icon={faTimes} color="white"/>
        </button>
      </div>
      <div id="skills-card-body">
        {lists.map((list, idx) => {
          return (
            <div classNam="skill-list-container" key="idx">
              <h4 className="skill-list-title">{list.title}</h4>
              <ul className="skill-list">
              {list.items.map((item) => {
                return (
                  <li className="skill-list-item"><h6 className="skill-list-item-text">{item}</h6></li>
                )
              })}
              </ul>
            </div>
          )
        })}

      </div>
    </div>
  )
}

SkillsCard.propTypes = {

}

export default SkillsCard
