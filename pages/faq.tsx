import React from 'react';
import { MainFAQ } from '../src/components/templates/MainFAQ';
import { Page } from '../src/components/templates/Page';
import { fetchACF } from '../src/utils';

export default function FAQ({ acf }) {
  return (
    <Page title={acf.page_title}>
      <MainFAQ acf={acf} />
    </Page>
  );
}

export async function getStaticProps() {
  const { acf, acfComponents } = await fetchACF(23);

  return {
    props: {
      acf,
      acfComponents
    },
  };
}
