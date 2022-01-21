import React from 'react';
import styled from '@emotion/styled';
import { DownloadApp } from '../../molecules/DownloadApp';
import { Social } from '../../molecules/Social';
import Link from 'next/link';

export const Footer = () => {
  return (
    <StyledFooter className={'footer'}>
      <div className='container'>
        <DownloadApp title={'Download the “Givvy” app'} />
        <ul className='menu'>
          <li>
            <Link href={'#'}>
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href={'#'}>
              <a>Support</a>
            </Link>
            <Link href={'#'}>
              <a>Support</a>
            </Link>
            <Link href={'#'}>
              <a>Support</a>
            </Link>
          </li>
          <li>
            <Link href={'#'}>
              <a>FAQs</a>
            </Link>
          </li>
          <li>
            <Link href={'#'}>
              <a>Contacts</a>
            </Link>

            <Link href={'#'}>
              <a>info@givvy.com</a>
            </Link>
          </li>
        </ul>
        <div className='subscribe'>Subscribe</div>
        <Social title={'Social Media'} />
        <p className='copyright'>© GIVVY 2022</p>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  border-top: 1px solid #515bdf;
  padding: 67px 0 47px;

  .container {
    display: grid;
    grid-template-columns: 1fr repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(3, auto);
    gap: 20px;
    width: 1290px;
    margin: 0 auto;
  }

  .download-app {
    grid-area: span 2;
  }

  .menu {
    grid-area: auto / span 4;
  }

  .subscribe {
    grid-area: auto / span 2;
  }

  .social {
    grid-area: 2 / -2 / -2 / -1;
  }

  .copyright {
    grid-area: -2 / 1 / -1 / 2;
  }
`;
