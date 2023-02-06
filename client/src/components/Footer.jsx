/* eslint-disable-next-line */
import React from 'react';
import styled from 'styled-components';
import './styles/Footer.css';

const StyledFooter = styled.footer`
  z-index: 1;
  position: relative;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 0;
  }
`;

const Footer = () => (
  <StyledFooter>
    <p>Dream big. Do good.</p>
  </StyledFooter>
);

export default Footer;
