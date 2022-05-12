import { useEffect, useReducer } from 'react';
import Client from './Client';
import useAsync from '../../hooks/useAsync';
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

const Users = () => {
  
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false,
  });

  const { loading, data: users, error } = state;

  const fetchUser = async () => {
    dispatch({ type: ACTION.LOADING });
    try {
      console.log('one');
      const data = await fetch('https://jsonplaceholder.typicode.com/users');
      const res = await data.json();
      console.log('two');
      dispatch({ type: ACTION.SUCCESS, payload: res });
      console.log('three');
    } catch (e) {
      dispatch({ type: ACTION.ERROR });
      console.log('ERROR',e)
    }
  };

  useEffect(() => {
    fetchUser();
    setTimeout(() => {
      users ? console.log('CLIENT DATA:', users) : console.log('NO CLIENTS');
    }, 1000);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>error...</div>;

  return (
    <div>
      <span style={{ textDecoration: 'underline', color: 'grey' }}>
        fetch API
      </span>
      {users?.map(data => (
        <Client key={data.id} data={data}></Client>
      ))}
      <button onClick={(fetchUser, console.log('CLIENTS:', users))}>
        fetch
      </button>
    </div>
  );
};

export default Users;
