import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../atoms/Icon';
import Image from 'next/image';
import {useSelector} from "react-redux";

export const MainFAQ = () => {
  // @ts-ignore
  const store = useSelector(store => store.globalStore);

  return (
    <StyledMainFAQ className={'main'}>
      <section className={'banner'}>
        <h1 className={'title'}>{store?.page?.banner?.title}</h1>
        <div className={'img-wrap'}>
          {store?.page?.banner?.background && (
            <Image
              src={store.page.banner.background}
              width={1177}
              height={839}
              alt={`FAQ banner`}
            />
          )}
        </div>
        <Icon variant={'arrow-big'} className={'icon'} />
      </section>
      <section className='list-section'>
        <ul className='list'>
          {store?.page?.faq?.map(({ title, question, answer }, index) => (
            <li className={'item'} key={index}>
              <p className='title'>{title}</p>
              <div className='content'>
                <h2 className='question'>{question}</h2>
                <p className='answer'>{answer}</p>
              </div>
            </li>
          ))}
          <li className={'item'}>
            <p className='title'>{store?.page?.last_item_in_faq?.title}</p>
            <div className='content'>
              <h2 className='question'>{store?.page?.last_item_in_faq?.question}</h2>
              <a href={`mailto:${store?.page?.last_item_in_faq?.email}`} className='answer'>
                {store?.page?.last_item_in_faq?.email}
              </a>
            </div>
          </li>
        </ul>
      </section>
    </StyledMainFAQ>
  );
};

const StyledMainFAQ = styled.main`
  width: 100%;
  max-width: calc(1290px + 2 * var(--vertical-padding));
  margin: 0 auto;

  .banner {
    height: min(1020px, 100vw);
    padding-top: clamp(50px, 140 / 1200 * 100vw, 140px);

    .title {
      font-style: normal;
      font-weight: normal;
      font-size: clamp(30px, 85 / 1200 * 100vw, 85px);
      line-height: 135%;
      color: var(--c-primary);
      max-width: 823px;
    }

    .img-wrap {
      position: absolute;
      bottom: 0;
      right: -64px;
      z-index: -1;
      max-width: 100%;

      @media (max-width: 1200px) {
        right: -20px;
      }
    }

    .icon {
      width: clamp(30px, 80 / 1200 * 100vw, 80px);
      fill: var(--c-primary);
      position: absolute;
      bottom: 0;
      left: var(--vertical-padding);
    }
  }

  .list-section {
    padding-top: clamp(50px, 96 / 1200 * 100vw, 96px);
    padding-bottom: clamp(50px, 144 / 1200 * 100vw, 144px);

    .list {
      .item {
        display: grid;
        grid-template-columns: 360px 1fr;
        gap: clamp(20px, 80 / 1200 * 100vw, 80px);
        padding: clamp(20px, 70 / 750 * 100vw, 70px) 0;
        border-bottom: 1px solid #ffc107;

        .title {
          font-weight: normal;
          font-size: clamp(24px, 45 / 750 * 100vw, 45px);
          line-height: 156.5%;
          color: var(--c-primary);
        }

        .content {
          .question {
            font-weight: bold;
            font-size: clamp(24px, 45 / 750 * 100vw, 45px);
            line-height: 156.5%;
            text-transform: uppercase;
            color: var(--c-primary);
            margin-bottom: clamp(20px, 45 / 750 * 100vw, 45px);
          }
          .answer {
            font-weight: 500;
            font-size: clamp(16px, 24 / 750 * 100vw, 24px);
            line-height: 156.5%;
            color: var(--c-primary);
            text-transform: uppercase;
          }
        }

        &:last-child {
          border-bottom: none;

          .question {
            text-transform: initial;
            margin-bottom: 0;
            font-size: clamp(24px, 45 / 750 * 100vw, 45px);
          }

          .answer {
            font-size: clamp(20px, 30 / 750 * 100vw, 30px);
          }
        }

        @media (max-width: 1200px) {
          grid-template-columns: 1fr;
        }
      }
    }
  }
`;
