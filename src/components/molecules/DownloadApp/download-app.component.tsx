import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';

export const DownloadApp = () => {
  return (
    <StyledDownloadApp>
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
    </StyledDownloadApp>
  );
};

const StyledDownloadApp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
