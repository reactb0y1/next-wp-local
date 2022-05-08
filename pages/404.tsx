import React, { useEffect } from 'react';
import { Page } from '../src/components/templates/Page';
import { fetchData } from '../src/utils';
import styled from 'styled-components';
import {useDispatch} from "react-redux";

export default function Page404(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'SET_STORE', payload: props})
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
