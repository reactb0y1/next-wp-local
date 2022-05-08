import React, { useEffect } from 'react';
import { MainFAQ } from '../src/components/templates/MainFAQ';
import { Page } from '../src/components/templates/Page';
import { fetchData } from '../src/utils';
import {useDispatch} from "react-redux";

export default function FAQ(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'SET_STORE', payload: props})
  }, []);

  return (
    <Page>
      <MainFAQ />
    </Page>
  );
}

export async function getStaticProps() {
  const props = await fetchData(27);

  return { props };
}
