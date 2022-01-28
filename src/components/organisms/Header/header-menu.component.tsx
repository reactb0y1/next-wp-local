import React from 'react';
import Link from 'next/link';
import { Social } from '../../molecules/Social';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { $store } from '../../../stores/global/global.store';

export const HeaderMenu = () => {
  const router = useRouter();
  const store = useStore($store);

  return (
    <>
      <StyledMenu className='menu'>
        {store?.menu?.menuHeader?.items?.map(({ title, url }) => (
          <Link href={url} key={url}>
            <a className={router.pathname === url ? 'active' : ''}>{title}</a>
          </Link>
        ))}
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
