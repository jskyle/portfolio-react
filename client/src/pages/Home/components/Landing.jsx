import React from 'react'
import './styles/Landing.sass';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops'


const Landing = (props) => {
  const { main, secondary } = props;

  return (
    <section role="complementary">
      <div id="landing-container">
        <div id="main-title-container">
          <h1>{main}</h1>
          <h6>{secondary}</h6>
        </div>
      </div>
    </section>
  )
}

Landing.propTypes = {

}

export default Landing
