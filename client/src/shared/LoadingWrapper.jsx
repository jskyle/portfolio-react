/* eslint-disable-next-line */
import React from 'react';
import styled, { css } from 'styled-components';
import BounceLoader from 'react-spinners/BounceLoader'

const StyledContainer = styled.div`
  position: fixed;
  z-index: 10000;
  height: 100vh;
  width: 100vw;
  top: 0;
  left:  0;
  
  display: flex;
  justify-content: center;
  align-items: center;

`;


const LoadingWrapper = ({ children, isLoading }) => {

  return (
    <>
    {isLoading ? (
      <StyledContainer>
        <BounceLoader color="#808080" loading={isLoading} size={150} />
      </StyledContainer>
    ) : children}
    </>

  );
};

export default LoadingWrapper;
