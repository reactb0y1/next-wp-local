import React from 'react';
import styled from '@emotion/styled';
import { Icon } from '../../atoms/Icon';
import Link from 'next/link';

interface ISocial {
  title?: string;
}

export const Social = ({ title }: ISocial) => {
  return (
    <StyledSocial className={'social'}>
      {title && <p className={'title'}>{title}</p>}

      <div className='links'>
        <Link href={'#'}>
          <a>
            <Icon variant={'fb'} width={16} height={29} />
          </a>
        </Link>
        <Link href={'#'}>
          <a>
            <Icon variant={'twitter'} width={34} height={28} />
          </a>
        </Link>
        <Link href={'#'}>
          <a>
            <Icon variant={'instagram'} width={28} height={28} />
          </a>
        </Link>
      </div>
    </StyledSocial>
  );
};

const StyledSocial = styled.div`
  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 29px;

    a {
      display: flex;
      fill: var(--c-primary);
    }
  }
`;
