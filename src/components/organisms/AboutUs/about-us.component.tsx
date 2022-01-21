import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

export const AboutUs = () => {
  return (
    <StyledAboutUs>
      <div className='head'>
        <h2 className='title'>ABOUT US</h2>
        <h3 className='sub-title'>What is Givvy?</h3>
      </div>

      <ul className='list'>
        <li className='item'>
          <div className='img-wrap'>
            <Image
              src={'/about-us-1.jpg'}
              layout={'fill'}
              objectFit={'contain'}
              className={'image'}
            />
          </div>
          <div className='text'>
            <p>
              Givvy was designed from a desire to have a better relationship and closer connection
              to the people we care about in a world where we don’t see each other as often as we’d
              like anymore. givvy’s not about the gift, givvy’s about the experience of giving the
              gift; something real in a digital world and the way it makes people feel important and
              cared about. We believe the best gift experiences involve the surprise of opening
              something special, not a gift card or just checking a box on a registry. We believe
              giving a great gift is when the people you care about know you care enough to give
              them something thoughtful they’ll cherish.
            </p>
            <p className={'active'}>
              Everybody has that one friend who is amazing at gifting. The friend who never forgets
              an occasion and sends you a Valentine’s Day card even though you’re single. Even
              something as simple as a card can make a person smile and feel loved and remembered!
            </p>
          </div>
        </li>
        <li className='item reverse'>
          <div className='img-wrap'>
            <Image
              src={'/about-us-2.jpg'}
              layout={'fill'}
              objectFit={'contain'}
              className={'image'}
            />
          </div>
          <div className='text'>
            <p>
              Unfortunately, we have busy lives at home and careers and like so many people, finding
              the time for shopping can be daunting. Then there’s the issue of finding a good gift
              because that in and of itself can feel impossible for many people. When we started
              givvy, we heard from many different people from all kinds of backgrounds who dreaded
              the holiday season just because of the shopping.
            </p>
            <p className={'active'}>
              If only we all had that professional personal assistant working for an executive we
              see on TV. A personal assistant who keeps track of all the occasions, somehow knows
              what everybody likes. We wanted a personal assistant who makes sure the people you
              care about know you think about them all the time.
            </p>
          </div>
        </li>
        <li className='item'>
          <div className='img-wrap'>
            <Image
              src={'/about-us-3.jpg'}
              layout={'fill'}
              objectFit={'contain'}
              className={'image'}
            />
          </div>
          <div className='text'>
            <p>
              So we designed and built givvy to be the personal assistant you needed. We know how
              busy life can get so we built a slick interface and notification system so you never
              forget. We know how overwhelming it was on other apps to manually build contact
              profiles so we made it fast and easy for your contacts to easily complete their own
              private profiles. We know many people don’t feel confident in finding great gifts so
              we hired professional shoppers to find those gifts for you.
            </p>
            <p>
              We know all the best gifts wouldn’t do our users any good if we couldn’t match them up
              so we made an awesome algorithm. We also know seeing an endless list of gifts is no
              different from shopping so we narrow it down and show you only a handful of the best
              of the best for your price range and contact. We built everything from the start to
              finish wanting to strengthen your relationships, build memorable experiences, and to
              send the message you care.
            </p>
          </div>
        </li>
        <li className='item full'>
          <div className='img-wrap'>
            <Image
              src={'/about-us-4.jpg'}
              layout={'fill'}
              objectFit={'contain'}
              className={'image'}
            />
          </div>
          <div className='text'>
            <p>
              That’s what givvy is about. It’s about making the people we care about feel special
              and loved. It’s about all of us having the opportunity to be great at gifting in just
              2 minutes.
            </p>
          </div>
        </li>
      </ul>
    </StyledAboutUs>
  );
};

const StyledAboutUs = styled.section`
  padding-top: 170px;
  padding-botom: 70px;

  .head,
  .item {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 67px;
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
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }

  .item {
    &.reverse {
      & > *:first-child {
        order: 1;
      }
      & > *:last-child {
        margin-left: auto;
      }
    }

    &.full {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;

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
        }
      }

      .img-wrap {
        height: calc(100 * 776 / 1920 * 1vw);

        .image {
          border-radius: 800px;
        }
      }
    }
  }

  .img-wrap {
    .image {
      border-radius: 86px;
    }
  }

  .text {
    max-width: 630px;
    p {
      font-weight: 500;
      font-size: 24px;
      line-height: 156.5%;

      &.active {
        color: var(--c-primary);
      }

      & + p {
        margin-top: 30px;
      }
    }
  }
`;
