import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { PageMotionWrapper } from "../../shared";
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 99999;
  color: white;

`;

const Skill = () => {
  return (
  <PageMotionWrapper>
    <StyledWrapper>
      <div id="skills-card-head">
        <h1 className="skills-card-title">Front End</h1>
        <Link to="/portfolio" className="close-button">
          <FontAwesomeIcon icon={faTimes} color="white" />
        </Link>
      </div>
      <div id="skills-card-body">
        {/* {content?.lists.map((list) => (
          <div classNam="skill-list-container" key={list.title}>
          <h4 className="skill-list-title">{list.title}</h4>
          <ul className="skill-list">
          {list.items.map((item) => (
            <li key={item} className="skill-list-item"><h6 className="skill-list-item-text">{item}</h6></li>
            ))}
            </ul>
            </div>
          ))} */}

      </div>
    </StyledWrapper>
  </PageMotionWrapper>
  );
};

export default Skill;
