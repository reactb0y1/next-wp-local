import React from 'react';
import styled from 'styled-components';
import { Banner } from '../../organisms/Banner';
import { AboutUs } from '../../organisms/AboutUs';
import { Benefits } from '../../organisms/Benefits';

export const MainHome = ({ acf }) => {
  const { about_us, benefits, banner } = acf;

  return (
    <main className={'main'}>
      <Banner banner={banner} />
      <AboutUs about_us={about_us} />
      <Benefits benefits={benefits} />
    </main>
  );
};
