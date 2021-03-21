import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';


// components
import { PageMotionWrapper } from "../../shared";

//redux
import { getContent } from "../../store/ui/selectors";
import { setSetting } from "../../store/ui/actions";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 1000;
  color: white;

  div#skill-header {
    padding-top: 1rem;
    padding-left: 4rem;
    padding-right: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: #ffffff;
      width: max-content;
      margin-top: 0;
      font-size: 10rem;
    }
    a {
      background-color: transparent;
      border: none;
      font-size: 10rem;
      margin-right: 4rem;
    }
  }
  div#skill-body {
    display: flex;
    justify-content: space-evenly;

    div {
      width: fit-content;
      text-align: left;

      h4 {
        color: white;
        width: fit-content;
        font-size: 4.5rem;
        letter-spacing: -0.25rem;
        font-weight: 600;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
      }

      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: fit-content;

        li {
          width: max-content;
          margin-bottom: 4rem;

          h6 {
              color: white;
              font-size: 3rem;
              letter-spacing: -0.1rem;
              margin-bottom: 0;
              margin-top: 0;
              font-weight: 300;
          }
        }
      }
    }
  }
`;

const Skill = () => {
  const dispatch = useDispatch();
  const { type } = useParams();
  const content = useSelector((state) => getContent(state, { type: "skills", key: type }))

  useEffect(() => {
    dispatch(setSetting({ setting: "overrideScrollTo", value: true }));
  }, [])

  return (
  <PageMotionWrapper>
    <StyledWrapper>
      <div id="skill-header">
        <h1>{content.title}</h1>
        <Link to="/portfolio">
          <FontAwesomeIcon icon={faTimes} color="white" />
        </Link>
      </div>
      <div id="skill-body">
        {content?.lists.map((list) => (
          <div key={list.title}>
          <h4>{list.title}</h4>
          <ul>
          {list.items.map((item) => (
            <li key={item}>
              <h6>{item}</h6>
            </li>
            ))}
            </ul>
            </div>
        ))}
      </div>
    </StyledWrapper>
  </PageMotionWrapper>
  );
};

export default Skill;
