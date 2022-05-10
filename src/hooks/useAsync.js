import { useReducer, useEffect } from 'react';

export const ACTION = {
  SUCCESS: 'success',
  LOADING: 'loading',
  ERROR: 'error',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: false,
      };
    case ACTION.LOADING:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case ACTION.ERROR:
      return {
        loading: false,
        data: null,
        error: action,
      };
  }
};

const useAsync = (callback) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false,
  });

  const fetchData = async () => {
    dispatch({ type: ACTION.LOADING });
    try {
      console.log('one');
      const data = await callback()
      const res = await data.json();
      console.log('two');
      dispatch({ type: ACTION.SUCCESS, payload: res });
      console.log('three');
    } catch (e) {
      dispatch({ type: ACTION.ERROR });
      console.log('ERROR', e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return [state, fetchData];
};

export default useAsync;
