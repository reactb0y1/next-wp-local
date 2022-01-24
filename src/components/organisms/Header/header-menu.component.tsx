import React from 'react';
import Link from 'next/link';
import { Social } from '../../molecules/Social';

export const HeaderMenu = () => {
  return (
    <>
      <div className='menu'>
        <Link href={'/about'}>
          <a>ABOUT US</a>
        </Link>
        <Link href={'/faq'}>
          <a>FAQs</a>
        </Link>
        <Link href={'/support'}>
          <a>SUPPORT</a>
        </Link>
        <Link href={'/contacts'}>
          <a>CONTACTS</a>
        </Link>
      </div>
      <Social />
    </>
  );
};
