/* eslint-disable-next-line */
import React from 'react';
import PropTypes from 'prop-types';
import './styles/Landing.sass';

const Landing = (props) => {
  const { type, children } = props;

  return (
    <section role="complementary">
      <div className="landing-container">
        <div className={`main-title-container ${type}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Landing;
