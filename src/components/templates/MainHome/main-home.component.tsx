import React from 'react';
import styled from '@emotion/styled';
import { Banner } from '../../organisms/Banner';
import { AboutUs } from '../../organisms/AboutUs';

export const MainHome = () => {
  return (
    <StyledMainHome className={'main'}>
      <Banner />
      <AboutUs />
    </StyledMainHome>
  );
};

const StyledMainHome = styled.main``;
