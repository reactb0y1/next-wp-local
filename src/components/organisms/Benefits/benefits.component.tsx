import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

export const Benefits = () => {
  return (
    <StyledBenefits>
      <h2 className='title'>BENEFITS</h2>
      <ul className='list'>
        <li className='item'>
          <div className='img-wrap'>
            <Image
              src={'/benefits-1.jpg'}
              layout={'fill'}
              objectFit={'contain'}
              className={'image'}
            />
          </div>
          <div className='text'>
            <h3>Powered by professional shoppers. Know you’re giving a great gift.</h3>
            <p>
              Our professional shoppers populate givvy with thoughtful and unique gifts. When you
              choose to gift for a contact and occasion, we instantly select a handful of the
              absolute best matches for your price range and recipient.
            </p>
          </div>
        </li>
        <li className='item reverse'>
          <div className='img-wrap'>
            <Image
              src={'/benefits-2.jpg'}
              layout={'fill'}
              objectFit={'contain'}
              className={'image'}
            />
          </div>
          <div className='text'>
            <h3>No daunting gift lists and hours shopping.</h3>
            <p>
              With an instant list of 4 options and 4 alternates specifically for your price range
              and recipient, you don’t waste time shopping and stressing. You can even learn why the
              shopper recommend the gift and even a little about the shopper so you can know they’re
              the right shopper for the occasion.
            </p>
          </div>
        </li>
        <li className='item'>
          <div className='img-wrap'>
            <Image
              src={'/benefits-3.jpg'}
              layout={'fill'}
              objectFit={'contain'}
              className={'image'}
            />
          </div>
          <div className='text'>
            <h3>Contacts can help complete their profiles for you.</h3>
            <p>
              A link to your contact’s missing profile information automatically populates and can
              be sent directly to your contact through your own email or text messages. You get
              notified as soon as they’ve updated their info!
            </p>
          </div>
        </li>
        <li className='item reverse full'>
          <div className='img-wrap'>
            <Image
              src={'/benefits-4.jpg'}
              layout={'fill'}
              objectFit={'contain'}
              className={'image'}
            />
          </div>
          <div className='text-wrap'>
            <div className='text'>
              <h3>Get notifications of upcoming occasions before it’s too late.</h3>
              <p>
                Notifications and home screen tiles in the app make sure you don’t catch yourself
                sending a text message instead of a great gift because an occasion fell through your
                busy schedule.
              </p>
            </div>
            <div className='text'>
              <h3>Contact info status at a glance.</h3>
              <p>
                Home screen tiles have color highlights and your contact list have icons to let you
                know instantly if a contact’s profile is complete and ready for gifting, and you’ll
                automatically be prompted with the option to edit or request any missing info before
                gifting.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </StyledBenefits>
  );
};
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

    &.reverse {
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

    &.full {
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

  .text-wrap {
    display: flex;
    flex-direction: column;
    gap: 130px;

    @media (max-width: 750px) {
      gap: 70px;
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

      @media (max-width: 750px) {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 1200px) {
    overflow: hidden;
  }
`;
