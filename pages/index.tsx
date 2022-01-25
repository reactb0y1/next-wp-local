import React from 'react';
import { MainHome } from '../src/components/templates/MainHome';
import { Page } from '../src/components/templates/Page';

export default function Index({ acf }) {
  return (
    <Page title={''}>
      <MainHome acf={acf} />
    </Page>
  );
}

export async function getStaticProps() {
  const postsRes = await fetch('http://next-wp-local/wp-json/acf/v3/pages/21');
  const posts = await postsRes.json();
  const acf = posts.acf;

  return {
    props: {
      acf,
    },
  };
}
