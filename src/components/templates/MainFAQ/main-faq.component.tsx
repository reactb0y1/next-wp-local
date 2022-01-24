import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../atoms/Icon';
import Image from 'next/image';

const questions_mock = [
  {
    id: 0,
    title: 'The distinction',
    question: 'What is Givvy?',
    answer:
      'Givvy isn’t a shopping app, a gift registry or a generic gift recommendation app. Givvy uses professional shoppers dedicated to finding unique and meaningful gifts which are perfect for your budget, the specific occasion, and person you’re gifting. Best of all, we only show the very best 8 options so you never run into a stressful shopping experience.\n',
  },
  {
    id: 1,
    title: 'Availability',
    question: 'Is givvy affordable?',
    answer:
      'Absolutely! Givvy may use professional shoppers to populate our system, but an advanced algorithm chooses the right gifts for your occasion, and that means you get the absolute best of both worlds. Great gifts chosen by professional shoppers without having to spend the money to hire a professional shopper yourself.',
  },
  {
    id: 2,
    title: 'Professional Approach',
    question: 'Does givvy have a good gift for every occasion? ',
    answer:
      'Yes! If our algorithm can’t find a great match for your occasion, we automatically assign a real professional shopper from our team to work on your occasion personally at no charge. We’ll get your personal gift recommendations loaded up within about 24 hours. We’re committed to ensuring you always have a great experience!',
  },
  {
    id: 3,
    title: 'Safety',
    question: 'Is my data safe?',
    answer:
      'Definitely. We’ve always been strongly committed to data security and we’ve hired independent system security professionals to test our systems starting months before we even began beta testing. After all, the founders of Givvy use the app, too!',
  },
  {
    id: 4,
    title: 'Privacy',
    question: 'Does givvy share or sell my information?',
    answer:
      'Givvy never sells any private profile information and we share information only as needed to operate our service. We take privacy very seriously. Check out our privacy policy here!',
  },
];

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
      <section className='list-section'>
        <ul className='list'>
          {questions_mock.map(({ id, title, question, answer }) => (
            <li className={'item'} key={id}>
              <p className='title'>{title}</p>
              <div className='content'>
                <h2 className='question'>{question}</h2>
                <p className='answer'>{answer}</p>
              </div>
            </li>
          ))}
          <li className={'item'}>
            <p className='title'>Didn't Cover Your Question?</p>
            <div className='content'>
              <h2 className='question'>Email us at</h2>
              <a href={'mailto:support@givvy'} className='answer'>
                SUPPORT@GIVVY
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
