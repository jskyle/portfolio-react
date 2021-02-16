import React from 'react'
import PropTypes from 'prop-types'
import { Landing, About, Work, Skills, Contact } from "./components/index";

const Home = (props) => {
  return (
    <div>
      <Landing main="Kyle Kearney" secondary="web developer and digitial creator"/>
      <About>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </About>
      <Work>
        <ul id="case-study-links-container">
          <li className="case-study-links">
            <a className="left" href="http://google.com">Light Nostalgia</a>
          </li>
          <li className="case-study-links">
            <a className="left" href="http://google.com">Pom</a>
          </li>
          <li className="case-study-links">
            <a className="left" href="http://google.com">Luca</a>
          </li>
          <li className="case-study-links">
            <a className="left" href="http://google.com">Posh Photo</a>
          </li>
          <li className="case-study-links">
            <a className="left" href="http://google.com">Personal Blog</a>
          </li>

        </ul>
      </Work>
      <Skills>
        <div id="skills-list-container">
          <button className="skills-button left">Front End</button>
          <button className="skills-button left">Back End</button>
          <button className="skills-button left">Dev Ops</button>
          <button className="skills-button left">Design</button>
        </div>
      </Skills>
      <Contact/>
    </div>
  )
}

Home.propTypes = {

}

export default Home
