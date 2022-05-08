import React from 'react';
import Link from 'next/link';
import { Social } from '../../molecules/Social';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import {useSelector} from "react-redux";

export const HeaderMenu = () => {
  const router = useRouter();
  // @ts-ignore
    const store = useSelector(store => store.globalStore);

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
  margin-left: 80px;

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

  @media (max-width: 1400px) {
    margin-left: 0;
  }
`;
