import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useStore } from 'effector-react';
import { $store } from '../../../stores/global/global.store';

export const AboutUs = () => {
  const store = useStore($store);

  return (
    <StyledAboutUs>
      <div className='head'>
        <h2 className='title'>{store?.page?.about_us?.header?.section_name}</h2>
        <h3 className='sub-title'>{store?.page?.about_us?.header?.title}</h3>
      </div>

      <ul className='list'>
        {store?.page?.about_us?.list?.map(({ image, text }, index) => (
          <li className='item' key={index}>
            <div className='img-wrap'>
              <Image
                src={image}
                layout={'fill'}
                objectFit={'contain'}
                className={'image'}
                alt={`About us ${index}`}
              />
            </div>
            <div className='text' dangerouslySetInnerHTML={{ __html: text }} />
          </li>
        ))}
      </ul>
    </StyledAboutUs>
  );
};

const StyledAboutUs = styled.section`
  padding-top: 170px;
  padding-bottom: 70px;

  .head,
  .item {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 67px;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
    }
  }

  .head {
    margin-bottom: 80px;

    .title {
      font-weight: normal;
      font-size: 18px;
      line-height: 105%;
      letter-spacing: 0.035em;
      color: var(--c-primary);
      margin: auto;
    }

    .sub-title {
      font-weight: bold;
      font-size: 55px;
      line-height: 156.5%;
      color: var(--c-primary);

      @media (max-width: 1200px) {
        text-align: center;
      }
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 100px;

    @media (max-width: 750px) {
      gap: 50px;
    }
  }

  .item {
    &:nth-child(2n) {
      & > *:first-child {
        order: 1;

        @media (max-width: 1200px) {
          order: initial;
        }
      }
      & > *:last-child {
        margin-left: auto;
      }
    }

    &:last-child {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      gap: 117px;

      .text {
        order: -1;
        max-width: 1290px;
        margin: auto;

        p {
          font-weight: 600;
          font-size: 34px;
          line-height: 156.5%;
          text-align: center;
          color: var(--c-primary);

          @media (max-width: 750px) {
            font-size: 22px;
          }
        }
      }

      .img-wrap {
        height: calc(100 * 776 / 1920 * 1vw);

        .image {
          border-radius: 800px;
        }
      }

      @media (max-width: 750px) {
        gap: 70px;
      }
    }
  }

  .img-wrap {
    .image {
      border-radius: 86px;

      @media (max-width: 750px) {
        border-radius: 0;
      }
    }

    @media (max-width: 1200px) {
      height: min(500px, 100vw);
    }
  }

  .text {
    max-width: 630px;

    p {
      font-weight: 500;
      font-size: 24px;
      line-height: 156.5%;

      strong {
        font-weight: 500;
        color: var(--c-primary);
      }

      & + p {
        margin-top: 46px;
      }

      @media (max-width: 750px) {
        font-size: 16px;
      }
    }

    @media (max-width: 1200px) {
      max-width: none;
    }
  }

  @media (max-width: 750px) {
    padding-top: 100px;
    padding-bottom: 50px;
  }
`;
