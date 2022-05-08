import React from 'react';
import Head from 'next/head';
import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';
import {useSelector} from "react-redux";

export const Page = ({ children }) => {
    // @ts-ignore
    const store = useSelector(state => state.globalStore) ;

  return (
    <>
      <Head>
        <title>
          Givvi landing
          {store?.page?.page_title ? ` | ${store?.page?.page_title}` : ''}
        </title>
        <link rel='icon' href={store?.components?.logo_favicon?.favicon} />
      </Head>

      <div className={'global-wrap'}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};
