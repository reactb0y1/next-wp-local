import React from 'react';
import Link from 'next/link';
import { Social } from '../../molecules/Social';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export const HeaderMenu = () => {
  const router = useRouter();

  return (
    <>
      <StyledMenu className='menu'>
        <Link href={'/about'}>
          <a className={router.pathname === '/about' ? 'active' : ''}>ABOUT US</a>
        </Link>
        <Link href={'/faq'}>
          <a className={router.pathname === '/faq' ? 'active' : ''}>FAQs</a>
        </Link>
        <Link href={'/support'}>
          <a className={router.pathname === '/support' ? 'active' : ''}>SUPPORT</a>
        </Link>
        <Link href={'/contacts'}>
          <a className={router.pathname === '/contacts' ? 'active' : ''}>CONTACTS</a>
        </Link>
      </StyledMenu>
      <Social />
    </>
  );
};

const StyledMenu = styled.div`
  .active {
    &:before {
      content: '';
      position: absolute;
      bottom: -31px;
      width: calc(100% + 10px);
      height: 8px;
      background: #ffc107;
      border-radius: 5px;
      left: -5px;

      @media (max-width: 1200px) {
        bottom: -12px;
      }
    }
  }
`;
