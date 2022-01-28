import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useStore } from 'effector-react';
import { $store } from '../../../stores/global/global.store';
import Image from 'next/image';

export const Social = () => {
  const store = useStore($store);

  return (
    <StyledSocial className={'social'}>
      <p className={'title'}>{store?.components?.social?.title}</p>

      <div className='links'>
        {store?.components?.social?.list?.map(({ name, link, ico }, index) => {
          return (
            <Link href={link} key={index}>
              <a>
                <Image src={ico} width={34} height={28} alt={`Logo`} />
              </a>
            </Link>
          );
        })}
      </div>
    </StyledSocial>
  );
};

const StyledSocial = styled.div`
  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      fill: var(--c-primary);
    }
  }

  .header & {
    .title {
      display: none;
    }
    .links {
      gap: 21px;
    }
  }

  .footer & {
    .links {
      width: 148px;
      transform: translate(-10px, -3px);
      gap: 13px;
    }
  }
`;
