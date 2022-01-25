import React from 'react';
import { MainFAQ } from '../src/components/templates/MainFAQ';
import { Page } from '../src/components/templates/Page';

export default function FAQ({ faq }) {
  return (
    <Page title={'FAQ'}>
      <MainFAQ faq={faq} />
    </Page>
  );
}

export async function getStaticProps() {
  const postsRes = await fetch('http://next-wp-local/wp-json/acf/v3/pages/23');
  const posts = await postsRes.json();
  const faq = posts.acf.faq;

  return {
    props: {
      faq,
    },
  };
}
