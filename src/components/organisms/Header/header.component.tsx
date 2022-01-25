import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderMenu } from './header-menu.component';
import { HamburgerCollapse } from 'react-animated-burgers';
import { useMediaQuery } from 'react-responsive';
import { slide as Menu } from 'react-burger-menu';

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleButton = useCallback(() => setMenuIsOpen((prevState) => !prevState), []);
  const maxWidth1200 = useMediaQuery({ query: '(max-width: 1200px)' });
  const maxWidth450 = useMediaQuery({ query: '(max-width: 450px)' });

  return (
    <StyledHeader className={'header'}>
      <div className='container'>
        <div className='logo'>
          <Link href={'/'}>
            <a>
              <Image
                src={'/logo.png'}
                width={maxWidth450 ? 180 : 243}
                height={maxWidth450 ? 83 : 111}
                alt={`Logo`}
              />
            </a>
          </Link>
        </div>

        {maxWidth1200 ? (
          <Menu isOpen={menuIsOpen} right onClose={toggleButton}>
            <HeaderMenu />
          </Menu>
        ) : (
          <HeaderMenu />
        )}

        {maxWidth1200 && (
          <HamburgerCollapse
            isActive={menuIsOpen}
            toggleButton={toggleButton}
            barColor={'#515bdf'}
          />
        )}
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

      @media (max-width: 1200px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
        margin-bottom: 50px;
      }
    }
  }

  .bm-menu-wrap {
    top: 0;
  }

  .bm-menu {
    background: white;
    padding: 50px 20px;
  }

  .bm-overlay {
    top: 0;
    left: 0;
  }

  @media (max-width: 1200px) {
    .social {
      width: 150px;
    }
  }

  @media (max-width: 450px) {
    height: 130px;
  }
`;
