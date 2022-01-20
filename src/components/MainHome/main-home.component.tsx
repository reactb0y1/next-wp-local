import React from 'react';
import styled from '@emotion/styled';
import { Banner } from '../Banner';

export const MainHome = () => {
  return (
    <StyledMainHome className={'main'}>
      <Banner />
    </StyledMainHome>
  );
};

const StyledMainHome = styled.main``;
