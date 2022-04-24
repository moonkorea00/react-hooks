import { useState, useRef } from 'react';

const UseRefHook = () => {
  const [value, setValue] = useState('');
  const ref1 = useRef();
  console.log('ref.current :', ref1.current);
  // 최초에는 undefined, 렌더 뒤는 input
  // useMemo, useCallback, useRef는 render사이에 어떤 상태를 유지
  return (
    <div>
      <input value={value} onChange={(e)=>{setValue(e.target.value)}} />
    <input ref={ref1}/>
    </div>
  );
};

export default UseRefHook;
