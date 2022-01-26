import React from 'react';
import { MainFAQ } from '../src/components/templates/MainFAQ';
import { Page } from '../src/components/templates/Page';

export default function FAQ({ acf }) {
  return (
    <Page title={acf.page_title}>
      <MainFAQ acf={acf} />
    </Page>
  );
}

export async function getStaticProps() {
  const page = await fetch('http://next-wp-local/wp-json/acf/v3/pages/23');
  const pageJSON = await page.json();
  const acf = pageJSON.acf;

  return {
    props: {
      acf,
    },
  };
}
