import React, { useEffect } from 'react';
import { Page } from '../src/components/templates/Page';
import { setStoreEv } from '../src/stores/global/global.store';
import { fetchData } from '../src/utils';
import styled from 'styled-components';

export default function Page404(props) {
  useEffect(() => {
    setStoreEv(props);
  }, []);

  return (
    <Page>
      <Styled404 className={'main'}>
        <section>
          <h1 className={'title'}>Page Not Found</h1>
        </section>
      </Styled404>
    </Page>
  );
}

const Styled404 = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;

  .title {
    font-weight: bold;
    font-size: 55px;
    line-height: 156.5%;
    color: var(--c-primary);
  }
`;

export async function getStaticProps() {
  const props = await fetchData(12);

  return { props };
}
