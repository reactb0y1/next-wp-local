import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from 'effector-react';
import { $store } from '../../../stores/global/global.store';

export const DownloadApp = () => {
  const store = useStore($store);

  return (
    <StyledDownloadApp className={'download-app'}>
      <p className={'title'}>{store?.components?.download?.title}</p>
      <div className='links'>
        {store?.components?.download && (
          <>
            <Link href={store?.components?.download?.app_store}>
              <a>
                <Image
                  src={'/app-store-badge.png'}
                  width={364}
                  height={108}
                  alt={'Download on the App Store'}
                />
              </a>
            </Link>
            <Link href={store?.components?.download?.google_play}>
              <a>
                <Image
                  src={'/google-play-badge.png'}
                  width={364}
                  height={108}
                  alt={'Get it on Google Play'}
                />
              </a>
            </Link>
          </>
        )}
      </div>
    </StyledDownloadApp>
  );
};

const StyledDownloadApp = styled.div`
  .title {
    .banner & {
      display: none;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 750px) {
      a > span {
        background: var(--c-primary) !important;
        border-radius: 21px;
        border: 3px solid white !important;

        img {
          transform: scale(1.08);
        }
      }
    }
  }

  .footer & {
    a > span {
      background: var(--c-primary) !important;
      border-radius: 21px;
      border: 3px solid white !important;

      img {
        transform: scale(1.08);
      }
    }
  }
`;
