import React from 'react';
import { MainHome } from '../src/components/templates/MainHome';
import { Page } from '../src/components/templates/Page';
import { fetchACF } from '../src/utils';

export default function Index({ acf }) {
  return (
    <Page title={acf.page_title}>
      <MainHome acf={acf} />
    </Page>
  );
}

export async function getStaticProps() {
  const { acf, acfComponents } = await fetchACF(21);

  return {
    props: {
      acf,
      acfComponents,
    },
  };
}
