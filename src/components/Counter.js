// presentational component: 리덕스 스토에 직접적으로 접근하지 않고 필요한 값 또는 함수를 props로맘ㄴ 받아와서
// 사용하는 컴포넌트, UI 선언에 집중

const Counter = ({ number, diff, onSetDiff, onIncrease, onDecrease }) => {
  const onChange = e => {
    // onSetDiff(e.target.valueAsNumber);
    onSetDiff(parseInt(e.target.value, 10));
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
};

export default Counter;


