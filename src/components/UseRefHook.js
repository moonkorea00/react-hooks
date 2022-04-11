import { useState, useRef } from 'react';

const UseRefHook = () => {
  const [value, setValue] = useState('');
  const ref1 = useRef();
  console.log('ref.current :', ref1.current);
  return (
    <div>
      <input value={value} onChange={(e)=>{setValue(e.target.value)}} />
    <input ref={ref1}/>
    </div>
  );
};

export default UseRefHook;
