import React, { useRef, useState, useEffect, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

const UserExample = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'moon',
      email: 'moon@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'dan',
      email: 'dan@example.com',
      active: true,
    },
    {
      id: 3,
      username: 'cho',
      email: 'cho@example.com',
      active: true,
    },
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: Date.now(),
      username,
      email,
    };
    setUsers([...users, user]);

    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  // useEffect(() => {
  //   console.log('start');
  //   console.log(users.filter(user => user.active === true).length);
  //   return () => {
  //     console.log('end');
  //   };
  // }, [users]);
  //useEffect는 컴포넌트가 마운트/언마운트/업데이트 될때 할 작업을 설정 가능

  const count = useMemo(() => {
    console.log('계산중');
    return users.filter(user => user.active === true).length;
  }, [users]);
  // input을 변경했을때마다 log가 찍히지만 useMemo를 사용하면 users값에 변화가 있을때만 실행
  // 특정 결과값만을 재사용할 때 사용

  //
  //useCallback은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <span>Active Users: {count}</span>
    </>
  );
};

export default UserExample;
