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
            <div className='sub-menu'>
              <Link href={'#'}>
                <a>Terms of Use</a>
              </Link>
              <Link href={'#'}>
                <a>Privacy Policy</a>
              </Link>
            </div>
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
            <div className='sub-menu'>
              <Link href={'#'}>
                <a>info@givvy.com</a>
              </Link>
            </div>
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
  border-top: 1px solid var(--c-primary);
  padding: 67px 0 47px;

  .container {
    display: grid;
    grid-template-columns: 300px repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(3, auto);
    row-gap: 20px;
    column-gap: 100px;
    width: 1290px;
    margin: 0 auto;
  }

  .menu li > a,
  .download-app .title,
  .social .title {
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 32px;
    color: var(--c-primary);
  }

  .download-app {
    grid-area: span 2;

    .title {
      margin-bottom: 64px;
    }
  }

  .menu {
    display: grid;
    grid-area: auto / span 4;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    row-gap: 20px;
    column-gap: 100px;

    li > a {
      margin-bottom: 30px;
    }

    .sub-menu {
      font-weight: normal;
      font-size: 20px;
      line-height: 200%;
      color: var(--c-primary);
      display: flex;
      flex-direction: column;
    }
  }

  .subscribe {
    grid-area: auto / span 2;
  }

  .social {
    grid-area: 2 / -2 / -2 / -1;

    .title {
      margin-bottom: 38px;
    }
  }

  .copyright {
    grid-area: -2 / 1 / -1 / 2;
    font-size: 12px;
    line-height: 146.4%;
    color: var(--c-primary);
  }
`;
