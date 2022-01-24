import Head from 'next/head';
import { Header } from '../src/components/organisms/Header';
import { Footer } from '../src/components/organisms/Footer';
import { MainFAQ } from '../src/components/templates/MainFAQ';

export default function FAQ() {
  return (
    <>
      <Head>
        <title>Givvi landing | FAQ</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={'global-wrap'}>
        <Header />
        <MainFAQ />
        <Footer />
      </div>
    </>
  );
}
