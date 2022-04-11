import { useState, useMemo, useCallback } from 'react';

const UseMemoHook = () => {
  const [value, setValue] = useState('');
  const [persons] = useState([
    { name: 'moon', age: 30 },
    { name: 'dan', age: 34 },
  ]);
  const sum = persons => {
    console.log('sum');
    return persons.map(person => person.age).reduce((l, r) => l + r, 0);
  };
  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);
  // value가 변할때마다 리렌더링이 발생
  // sum을 persons에 의존했을때만

  const click = useCallback(() => {
    console.log(value);
  }, []);
  //
  
  return (
    <div>
      <input value={value} onChange={(e)=>{setValue(e.target.value)}} />
      <p>{count}</p>
      <button onClick={click}>click</button>
    </div>
  );
};

export default UseMemoHook;
