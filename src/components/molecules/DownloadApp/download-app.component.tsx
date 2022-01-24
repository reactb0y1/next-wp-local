import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

interface IDownloadApp {
  title?: string;
}

export const DownloadApp = ({ title }: IDownloadApp) => {
  return (
    <StyledDownloadApp className={'download-app'}>
      {title && <p className={'title'}>{title}</p>}
      <div className='links'>
        <Link href={'#'}>
          <a>
            <Image src={'/app-store-badge.svg'} width={300} height={109} />
          </a>
        </Link>
        <Link href={'#'}>
          <a>
            <Image src={'/google-play-badge.png'} width={364} height={109} />
          </a>
        </Link>
      </div>
    </StyledDownloadApp>
  );
};

const StyledDownloadApp = styled.div`
  .links {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
