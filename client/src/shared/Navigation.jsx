/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable-next-line */
import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import SocialRow from './SocialRow';
import { Divide as Hamburger } from 'hamburger-react';


const StyledNav = styled.nav`
  position: fixed;
  display ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 10000;
  background-color: #ffffff;

  ul {
    list-style: none;

    a {
      font-weight: 800;
      font-size: 8rem;

      .left {
        position: relative;
      }
    };

    .active {
      .left:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 5px;
        bottom: -2px;
        left: 0;
        background-color: #000000;
        visibility: visible;
        transition: all 0.3s ease-in-out;
      };
    };
  };
`;

const HeaderBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100001;

  button {
    position: absolute;
    padding: 1rem;
    top: 1rem;
    right: 1rem;
    border-radius: 50%;
    color: black;
  };

  h4 {
    position: fixed;
    top: 2rem;
    left: 2rem;
    font-weight: 600;
  };

  button:hover {
    color: white;
    background-color: black;
    border-radius: 50%;
    transition: all 1s ease;
  }

`;

const StyledUl = styled.ul`
  list-style: none;

    a {
      font-size: 8rem;
    }
`;

const Navigation = ({ type }) => {
  const [navOpen, toggleNavOpen] = useState(false);

  const toggle = () => {
    toggleNavOpen(!navOpen);
  };

  const navScreen = (
    <StyledNav open={navOpen}>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/portfolio" onClick={toggle}>
            <span className="left">portfolio</span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink activeClass="active" className="nav-link" to="/#work-section">
            <span className="left">work</span>
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink activeClass="active" className="nav-link" to="skills-section">
            <span className="left">skills</span>
          </NavLink>
        </li> */}
        <li>
          <NavLink activeClassName="active" to="/blog" onClick={toggle}>
            <span className="left">journal</span>
          </NavLink>
        </li>
        {/* <li id="connect-link">
          <NavLink activeClass="active" className="nav-link" to="connect-section" onClick={toggle}>
            <span className="left">connect</span>
          </NavLink>
        </li> */}
        <li>
          <SocialRow/>
        </li>
      </ul>
    </StyledNav>
  );

  return (
    <>
      <HeaderBar>
        <Link to="/"><h4><span className="left">{!type || navOpen ? 'Kyle Kearney' : ''}</span></h4></Link>
        <Button className="header-bar-nav-button" color="link" onClick={toggle}><Hamburger toggle={toggle} toggled={navOpen} onToggle={toggle} hideOutline label="navigation menu" /></Button>
      </HeaderBar>
      {navScreen}
    </>
  );
};

Navigation.propTypes = {
  type: PropTypes.bool,
};

Navigation.defaultProps = {
  type: false,
};

export default Navigation;
