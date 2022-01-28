import React from 'react';
import { Banner } from '../../organisms/Banner';
import { AboutUs } from '../../organisms/AboutUs';
import { Benefits } from '../../organisms/Benefits';

export const MainHome = () => (
  <main className={'main'}>
    <Banner />
    <AboutUs />
    <Benefits />
  </main>
);
