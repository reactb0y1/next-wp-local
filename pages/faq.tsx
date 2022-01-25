import React from 'react';
import { MainFAQ } from '../src/components/templates/MainFAQ';
import { Page } from '../src/components/templates/Page';

export default function FAQ() {
  return (
    <Page title={'FAQ'}>
      <MainFAQ />
    </Page>
  );
}
