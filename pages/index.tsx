import React from 'react';
import { MainHome } from '../src/components/templates/MainHome';
import { Page } from '../src/components/templates/Page';

export default function Index({ acf }) {
  return (
    <Page title={acf.page_title}>
      <MainHome acf={acf} />
    </Page>
  );
}

export async function getStaticProps() {
  const page = await fetch('http://next-wp-local/wp-json/acf/v3/pages/21');
  const pageJSON = await page.json();
  const acf = pageJSON.acf;

  return {
    props: {
      acf,
    },
  };
}
