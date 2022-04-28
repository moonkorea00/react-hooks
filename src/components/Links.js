import { Link } from 'react-router-dom';
import { useState } from 'react';

const Links = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li onClick={() => setToggle(prev => !prev)}>React</li>
      {toggle && (
        <ul>
          <li>
            <Link to="/windowWidth">useWindowWidth</Link>
          </li>
          <li>
            <Link to="/useReducerHook1">useReducerHook1</Link>
          </li>
          <li>
            <Link to="/useReducerHook2">useReducerHook2</Link>
          </li>
          <li>
            <Link to="/userExample">추가/제거/수정</Link>
          </li>
          <li>
            <Link to="/controlledInputs">Controlled Inputs</Link>
          </li>
          <li>
            <Link to="/bank">Bank</Link>
          </li>
        </ul>
      )}
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
  );
};

export default Links;
