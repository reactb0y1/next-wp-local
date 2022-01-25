import React from 'react';
import { MainFAQ } from '../src/components/templates/MainFAQ';
import { Page } from '../src/components/templates/Page';

export default function FAQ({ faq, last_item_in_faq }) {
  return (
    <Page title={'FAQ'}>
      <MainFAQ faq={faq} last_item_in_faq={last_item_in_faq} />
    </Page>
  );
}

export async function getStaticProps() {
  const postsRes = await fetch('http://next-wp-local/wp-json/acf/v3/pages/23');
  const posts = await postsRes.json();
  const { faq, last_item_in_faq } = posts.acf;

  return {
    props: {
      faq,
      last_item_in_faq,
    },
  };
}
