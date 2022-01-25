import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export const Benefits = ({ benefits }) => (
  <StyledBenefits>
    <h2 className='title'>{benefits.section_name}</h2>
    <ul className='list'>
      {benefits.list.map(({ image, text }, index) => (
        <li className='item' key={index}>
          <div className='img-wrap'>
            <Image src={image} layout={'fill'} objectFit={'contain'} className={'image'} />
          </div>
          <div className='text' dangerouslySetInnerHTML={{ __html: text }} />
        </li>
      ))}
    </ul>
  </StyledBenefits>
);

const StyledBenefits = styled.section`
  padding-top: 70px;
  padding-bottom: 214px;
  max-width: calc(1290px + 2 * var(--vertical-padding));
  margin: 0 auto;

  .title {
    font-weight: normal;
    font-size: 18px;
    line-height: 105%;
    letter-spacing: 0.035em;
    color: var(--c-primary);
    margin-bottom: 68px;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 200px;

    @media (max-width: 1200px) {
      gap: 100px;
    }

    @media (max-width: 750px) {
      gap: 50px;
    }
  }

  .img-wrap {
    transform: scale(1.25);
    transform-origin: right;

    @media (max-width: 1200px) {
      height: min(500px, 100vw);
      transform: none;
    }
  }

  .item {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 67px;

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

      .img-wrap {
        transform-origin: left;
      }
    }

    &:last-child {
      .img-wrap {
        transform: scale(1.25) translateY(-70px);

        @media (max-width: 1200px) {
          transform: none;
        }
      }
    }

    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
    }
  }

  .text {
    h3 {
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 137%;
      color: var(--c-primary);
      margin-bottom: 57px;

      @media (max-width: 750px) {
        font-size: 20px;
        margin-bottom: 20px;
      }
    }

    p {
      font-weight: 500;
      font-size: 24px;
      line-height: 156.5%;

      & + h3 {
        margin-top: 130px;

        @media (max-width: 750px) {
          margin-top: 70px;
        }
      }

      @media (max-width: 750px) {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 1200px) {
    overflow: hidden;
  }
`;
