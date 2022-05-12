import { useState, useReducer } from 'react';
import styled from 'styled-components';

export const ACTIONS = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.DEPOSIT:
      console.log('increment money', state);
      return state + action.payload;
    case ACTIONS.WITHDRAW:
      console.log('decrement money', state);
      if (state === 0) {
        return 0;
      }
      return state - action.payload;
    default:
      return state;
  }
};
const Bank = () => {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  console.log('number', number);

  return (
    <>
      <h1>useReducer 은행</h1>
      <p>잔고: {money}원</p>
      <input
        type="number"
        value={number >= 0 ? number : 0}
        step="1000"
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button
        disabled={number > 0 ? false : true}
        onClick={() => {
          dispatch({ type: ACTIONS.DEPOSIT, payload: number });
        }}
      >
        예금
      </button>
      <button
        disabled={money > 0 ? false : true}
        onClick={() => {
          dispatch({ type: ACTIONS.WITHDRAW, payload: number });
        }}
      >
        출금
      </button>
    </>
  );
};

export default Bank;
