import React from 'react';
import Head from 'next/head';
import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';
import { useStore } from 'effector-react';
import { $store } from '../../../stores/global/global.store';

export const Page = ({ children }) => {
  const store = useStore($store);

  return (
    <>
      <Head>
        <title>
          Givvi landing
          {store?.page?.page_title ? ` | ${store?.page?.page_title}` : ''}
        </title>
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <div className={'global-wrap'}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};
