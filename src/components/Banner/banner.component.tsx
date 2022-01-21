import React from 'react';
import styled from '@emotion/styled';
import { DownloadApp } from '../DownloadApp';

export const Banner = () => {
  return (
    <StyledBanner className={'banner'}>
      <div className='container'>
        <h1 className={'title'}>BE GREAT AT GIFTING IN 2 MINUTES!</h1>
        <DownloadApp />
      </div>
    </StyledBanner>
  );
};

const StyledBanner = styled.section`
  height: 1020px;
  background-image: url('/banner.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 1290px;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 88px;
  }

  .title {
    font-weight: normal;
    font-size: 100px;
    line-height: 105%;
    letter-spacing: 0.035em;
    color: #ffffff;
    max-width: 877px;
  }
`;
