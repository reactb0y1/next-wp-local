import React, { useEffect } from 'react';
import { MainFAQ } from '../src/components/templates/MainFAQ';
import { Page } from '../src/components/templates/Page';
import { fetchData } from '../src/utils';
import { setStoreEv } from '../src/stores/global/global.store';

export default function FAQ(props) {
  useEffect(() => {
    setStoreEv(props);
  }, []);

  return (
    <Page>
      <MainFAQ />
    </Page>
  );
}

export async function getStaticProps() {
  const props = await fetchData(23);

  return { props };
}
