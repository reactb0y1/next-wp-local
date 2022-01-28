import React, { useEffect } from 'react';
import { MainHome } from '../src/components/templates/MainHome';
import { Page } from '../src/components/templates/Page';
import { fetchACF } from '../src/utils';
import { setStoreEv } from '../src/stores/global/global.store';

export default function Index(props) {
  useEffect(() => {
    setStoreEv(props);
  }, []);

  return (
    <Page>
      <MainHome />
    </Page>
  );
}

export async function getStaticProps() {
  const { page, components } = await fetchACF(21);

  return {
    props: {
      page,
      components,
    },
  };
}
