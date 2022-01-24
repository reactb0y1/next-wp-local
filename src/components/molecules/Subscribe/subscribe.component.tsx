import React from 'react';
import styled from '@emotion/styled';
import { Icon } from '../../atoms/Icon';

export const Subscribe = () => {
  return (
    <StyledSubscribe className='subscribe'>
      <p className={'title'}>Subscribe For Drop Updates</p>

      <div className='input-wrap'>
        <input type='email' className='input' placeholder={'Your e-mail'} />
        <button className={'button'}>
          <Icon variant={'arrow'} className={'arrow'} />
        </button>
      </div>
    </StyledSubscribe>
  );
};

const StyledSubscribe = styled.form`
  .title {
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    color: var(--c-primary);
    margin-bottom: 24px;
  }

  .input-wrap {
    width: 330px;
  }

  .input {
    border-bottom: 1px solid var(--c-primary);
    width: 100%;
    font-weight: normal;
    font-size: 20px;
    line-height: 200%;
    color: var(--c-primary);
  }

  .button {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    background-color: transparent;
    transition: var(--transition);
    border-radius: 50%;

    &:hover,
    &:active,
    &:focus {
      .arrow {
        transform: translateX(5px);
      }
    }
  }

  .arrow {
    width: 30px;
    fill: var(--c-primary);
    transition: var(--transition);
  }
`;
