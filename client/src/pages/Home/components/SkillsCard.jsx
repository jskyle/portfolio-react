import React from 'react'
import './styles/SkillsCard.sass';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SkillsCard = ({ content, setContent }) => {

  return (
    <div className="skills-card-container" style={{display: content ? "" : "none" }}>
      <div id="skills-card-head">
        <h1 className="skills-card-title">{content?.title || ""}</h1>
        <button className="close-button" onClick={() => setContent(null)}>
          <FontAwesomeIcon icon={faTimes} color="white"/>
        </button>
      </div>
      <div id="skills-card-body">
        {content?.lists.map((list, idx) => {
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
