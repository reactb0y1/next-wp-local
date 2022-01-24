import React from 'react';
import styled from '@emotion/styled';
import { Icon } from '../../atoms/Icon';
import Image from 'next/image';

export const MainFAQ = () => {
  return (
    <StyledMainFAQ className={'main'}>
      <section className={'banner'}>
        <h1 className={'title'}>Frequently Asked Questions</h1>
        <div className={'img-wrap'}>
          <Image src={'/main-faq.jpg'} width={1177} height={839} />
        </div>
        <Icon variant={'arrow-big'} className={'icon'} />
      </section>
    </StyledMainFAQ>
  );
};

const StyledMainFAQ = styled.main`
  width: 100%;
  max-width: 1290px;
  margin: 0 auto;

  .banner {
    height: min(1020px, 100vh);
    padding-top: 140px;

    .title {
      font-style: normal;
      font-weight: normal;
      font-size: 85px;
      line-height: 135%;
      color: var(--c-primary);
      max-width: 823px;
    }

    .img-wrap {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: -1;
      max-width: 100%;
    }

    .icon {
      width: 50px;
      fill: var(--c-primary);
      position: absolute;
      bottom: 0;
      left: var(--vertical-padding);
    }
  }
`;
