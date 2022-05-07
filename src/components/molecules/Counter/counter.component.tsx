import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";

export const Counter = () => {
    // @ts-ignore
    const count = useSelector(state => state.testData);
    const dispatch = useDispatch();

    return (
        <StyledCounter>
            <button
                onClick={() => {
                    dispatch({type: "ADD"})
                }}
            >
                +
            </button>
            <p>{count}</p>
            <button
                onClick={() => {
                    dispatch({type: "REMOVE"})
                }}
            >
                -
            </button>
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
