import React from 'react';
import { MainHome } from '../src/components/templates/MainHome';
import { Page } from '../src/components/templates/Page';

export default function Index() {
  return (
    <Page title={''}>
      <MainHome />
    </Page>
  );
}
