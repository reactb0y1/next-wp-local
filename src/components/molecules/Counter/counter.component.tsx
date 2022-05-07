import React from 'react';
import styled from "styled-components";

export const Counter = () => {
    return (
        <StyledCounter>
            <button>+</button>
            <p>0</p>
            <button>-</button>
        </StyledCounter>
    );
};

const StyledCounter = styled.div`
  display: flex;
  gap: 10px;
  
  button {
    padding: 5px;
  }
`;
