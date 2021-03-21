/* eslint-disable-next-line */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LandingContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height:  100%;
  min-height: ${(props) => (props.secondary ? '75vh' : '100vh')};
  display: flex;
  justify-content: center;
  align-items: center;

  
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.secondary ? 'start' : 'center')};

    h2 {
      font-size: 6rem;
      text-align: left;
    }

  h6 {
    font-size: 1.35rem;
    padding-top: 0;
    margin-top: 1.5rem;
    letter-spacing: .2rem;
  };

  h5 {
    text-align: left;
    width: 100%;
    font-size: 3rem;
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: 300;
  };


    h1 {
      font-family: 'Manrope', sans-serif !important;
      width: fit-content;
      font-size: 10rem;
      line-height: 0.85;
      margin-top: 0px;
      margin-bottom: 0px;
      padding-left: 0px;
      padding-bottom: 0px;
      padding-top: 0px;
    };
    
    @media screen and ( max-width: 1199px  ) {
      h1 {
        font-size: 8rem;
      };
    };
  
    @media screen and ( max-width: 991px) {
      h1 {
        font-size: 6rem;
      };
  
    };
  
    @media screen and ( max-width: 767px) {
      h1 {
        font-size: 5rem;
      };
  
    };
  
    @media screen and ( max-width: 549px) {
      h1 {
        font-size: 4rem;
      };
  
    };
  
  
    @media screen and ( max-width: 448px) {
      h1 {
        font-size: 3.5rem;
      };
  
    };
  }



`;

const Landing = ({ children, secondary }) => {
  

  return (
      <LandingContainer secondary={secondary}>
        <div>
          {children}
        </div>
      </LandingContainer>
  );
};

Landing.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Landing;
