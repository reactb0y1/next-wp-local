import Head from 'next/head';
import { Header } from '../src/components/organisms/Header';
import { MainHome } from '../src/components/templates/MainHome';
import { Footer } from '../src/components/organisms/Footer';

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
