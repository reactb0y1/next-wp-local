import React from 'react';
import styled from '@emotion/styled';
import { Banner } from '../../organisms/Banner';
import { AboutUs } from '../../organisms/AboutUs';
import { Benefits } from '../../organisms/Benefits';

export const MainHome = () => {
  return (
    <StyledMainHome className={'main'}>
      <Banner />
      <AboutUs />
      <Benefits />
    </StyledMainHome>
  );
};

const StyledMainHome = styled.main``;
