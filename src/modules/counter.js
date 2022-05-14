const ACTION = {
  SET_DIFF: 'counter/SET_DIFF',
  INCREASE: 'counter/INCREASE',
  DECREASE: 'counter/DECREASE',
};

export const setDiff = (diff) => ({
  type: ACTION.SET_DIFF,
  diff,
});
export const increase = () => ({
  type: ACTION.INCREASE,
});
export const decrease = () => ({
  type: ACTION.DECREASE,
});

const initialState = {
  number: 0,
  diff: 1,
};

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case ACTION.INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case ACTION.DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
};
