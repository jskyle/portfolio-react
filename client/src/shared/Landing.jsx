import React from 'react';
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

};

export default Landing;
