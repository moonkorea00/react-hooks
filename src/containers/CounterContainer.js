import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

// container component: 리덕스 스토어의 상태를 조회하거나 액션을 디스패치 할 수 있는 컴포넌트
// HTML을 사용하지 않고 다른 presentational component를 불러와서 사용
const CounterContainer = () => {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook
  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));
  // useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용 할 수 있게 해주는 Hook
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };
  
  const onSetDiff = diff => {
    dispatch(setDiff(diff));
  };

  return (
    <Counter
      number={number}
      diff={diff}
      // 액션을 디스패치하는 함수들을 props로 전달
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer;
