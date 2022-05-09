import { useEffect, useState } from 'react';
import Client from './Client';

const Users = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  const fetchUser = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
        setError(false);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>error...</div>;

  return (
    <div>
      <span style={{ textDecoration: 'underline', color: 'grey' }}>
        fetch API
      </span>
      {users.map(data => (
        <Client key={data.id} data={data}></Client>
      ))}
      <button onClick={fetchUser}>fetch</button>
    </div>
  );
};

export default Users;
