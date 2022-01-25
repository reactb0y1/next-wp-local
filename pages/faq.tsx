import React from 'react';
import { MainFAQ } from '../src/components/templates/MainFAQ';
import { Page } from '../src/components/templates/Page';

export default function FAQ({ acf }) {
  return (
    <Page title={'FAQ'}>
      <MainFAQ acf={acf} />
    </Page>
  );
}

export async function getStaticProps() {
  const postsRes = await fetch('http://next-wp-local/wp-json/acf/v3/pages/23');
  const posts = await postsRes.json();
  const acf = posts.acf;

  return {
    props: {
      acf,
    },
  };
}
