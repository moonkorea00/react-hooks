import { useState } from 'react';
import Client from './Client';
import useAsync from '../../hooks/useAsync';
import SingleClient from './SingleClient';

const getData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  return data.json();
};

const Users = () => {
  const [state, fetchUser] = useAsync(getData, [], true);
  const [userId, setUserId] = useState(null);
  const { loading, data: users, error } = state;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>error...</div>;
  if (!users)
    return (
      <button
        onClick={() => {
          fetchUser();
          console.log('CLIENTS:', users);
        }}
      >
        fetch
      </button>
    );
  return (
    <div>
      <span style={{ textDecoration: 'underline', color: 'grey' }}>
        fetch API
      </span>
      {users?.map(data => (
        <ul key={data.id}>
          <li onClick={() => setUserId(data.id)}>
            <b>name: </b>
            {data.name}
          </li>
        </ul>
      ))}
      {userId && <SingleClient id={userId} />}
    </div>
  );
};

export default Users;
