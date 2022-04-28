import React from 'react';

const User = ({ users, onRemove, onToggle }) => {
  const { username, email, id, active } = users;
  const style = { color: active ? 'red' : 'green' };
  return (
    <div>
      <b style={style}>{username}</b> <span>({email})</span>
      <button onClick={() => onToggle(id)}>수정</button>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
};

const UserList = ({ users, onRemove, onToggle }) => {
  return (
    <div>
      {users.map(users => (
        <User users={users} key={users.id} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>
  );
};

export default UserList;
