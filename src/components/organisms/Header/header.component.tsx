import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { Social } from '../../molecules/Social';

export const Header = () => {
  return (
    <StyledHeader className={'header'}>
      <div className='container'>
        <div className='logo'>
          <Link href={'/'}>
            <a>
              <Image src={'/logo.png'} width={243} height={111} />
            </a>
          </Link>
        </div>

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
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 189px;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 1290px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 88px;

      a {
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 135%;
        color: #515bdf;
      }
    }
  }
`;
