import { useReducer } from 'react';
import styled from 'styled-components';

const ACTIONS = {
  INCREMENT : 'increment',
  DECREMENT : 'decrement'
}
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state; //current state
  }
};
const UseReducerHook1 = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // dispatch(function) is what we call in order to update our state.
  // the reducer takes the current state and action
  // action is what we pass to the dispatch function
  // gets set to the action variable
  // function reducer will return the updated state

  // function reducer basically is funciton dispatch, takes current count and adds 1

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };
  return (
    <>
      <Increment onClick={increment}>+</Increment>
      <Count>{state.count}</Count>
      <Decrement onClick={decrement}>-</Decrement>
    </>
  );
};

const Increment = styled.button``;

const Count = styled.div``;

const Decrement = styled.button``;
export default UseReducerHook1;
