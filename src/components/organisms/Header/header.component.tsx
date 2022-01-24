import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderMenu } from '../../molecules/HeaderMenu';
import { HamburgerCollapse } from 'react-animated-burgers';
import { useMediaQuery } from 'react-responsive';

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleButton = useCallback(() => setMenuIsOpen((prevState) => !prevState), []);
  const media = useMediaQuery({ query: '(max-width: 1200px)' });

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

        {media && (
          <HamburgerCollapse
            isActive={menuIsOpen}
            toggleButton={toggleButton}
            barColor={'#515bdf'}
          />
        )}

        {!media && <HeaderMenu />}
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
        color: var(--c-primary);
      }
    }
  }
`;
