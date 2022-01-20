import Head from 'next/head';
import { Header } from '../src/components/Header';
import { MainHome } from '../src/components/MainHome';
import { Footer } from '../src/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Givvi landing</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={'global-wrap'}>
        <Header />
        <MainHome />
        <Footer />
      </div>
    </>
  );
}
