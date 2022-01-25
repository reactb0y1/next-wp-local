import React from 'react';
import Head from 'next/head';
import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';

export const Page = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Givvi landing {title ? ` | ${title}` : ''} </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={'global-wrap'}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};
