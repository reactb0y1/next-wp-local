import React, { useEffect } from 'react';
import { MainHome } from '../src/components/templates/MainHome';
import { Page } from '../src/components/templates/Page';
import { fetchData } from '../src/utils';
import {useDispatch} from "react-redux";

export default function Index(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'SET_STORE', payload: props })
  }, []);

  return (
    <Page>
      <MainHome />
    </Page>
  );
}

export async function getStaticProps() {
  const props = await fetchData(12);

  return { props };
}
