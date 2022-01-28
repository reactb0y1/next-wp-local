import React from 'react';
import styled from 'styled-components';
import { DownloadApp } from '../../molecules/DownloadApp';
import { Social } from '../../molecules/Social';
import { Subscribe } from '../../molecules/Subscribe';
import { FooterMenu } from './footer-menu.component';

export const Footer = () => {
  return (
    <StyledFooter className={'footer'}>
      <div className='container'>
        <DownloadApp />
        <FooterMenu />
        <Subscribe />
        <Social />
        <p className='copyright'>© GIVVY {new Date().getFullYear()}</p>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  border-top: 1px solid var(--c-primary);
  padding-top: 67px;
  padding-bottom: 47px;

  .container {
    display: grid;
    grid-template-columns: 340px repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(3, auto);
    column-gap: 100px;
    max-width: 1290px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 20px;
    }

    @media (max-width: 750px) {
      grid-template-columns: 1fr;
      grid-template-rows: initial;
      gap: 30px;
    }
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

      @media (max-width: 1200px) {
        margin-bottom: 38px;
      }

      @media (max-width: 750px) {
        margin-bottom: 20px;
      }
    }

    .links a {
      max-width: 270px;
      max-height: 75px;
    }

    @media (max-width: 1200px) {
      grid-area: span 2 / span 2;
    }

    @media (max-width: 750px) {
      grid-area: initial;
    }
  }

  .menu {
    display: grid;
    grid-area: auto / span 4;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    row-gap: 20px;
    column-gap: 30px;
    margin-bottom: 45px;

    .sub-menu {
      margin-top: 30px;
      font-weight: normal;
      font-size: 20px;
      line-height: 200%;
      color: var(--c-primary);
      display: flex;
      flex-direction: column;

      @media (max-width: 750px) {
        margin-top: 10px;
      }
    }

    @media (max-width: 1200px) {
      order: -1;
      margin-bottom: 10px;
    }

    @media (max-width: 750px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-area: initial;
      margin: 0;
      column-gap: 10px;
    }

    @media (max-width: 450px) {
      grid-template-columns: 1fr;
    }
  }

  .subscribe {
    grid-area: auto / span 2;

    @media (max-width: 750px) {
      grid-area: initial;
    }
  }

  .social {
    grid-area: 2 / -3 / -2 / -1;
    margin: 0 0 auto auto;
    width: 190px;

    .title {
      margin-bottom: 38px;

      @media (max-width: 750px) {
        margin-bottom: 20px;
      }
    }

    @media (max-width: 750px) {
      grid-area: initial;
      margin: 0;
    }
  }

  .copyright {
    grid-area: -2 / 1 / -1 / 2;
    font-size: 12px;
    line-height: 146.4%;
    color: var(--c-primary);
    margin-top: 60px;

    @media (max-width: 1200px) {
      grid-area: initial;
      order: 5;
      margin-top: 20px;
    }

    @media (max-width: 750px) {
      margin: 0;
    }
  }
`;
