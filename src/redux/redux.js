import { createStore } from 'redux';
// createStore는 스토어를 만들어주는 함수

// 리덕스에서 관리 할 상태 정의
const initialState = {
  count: 0,
  text: '',
  list: [],
};

// 액션 타입
const ACTION = {
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
  CHANGE_TEXT: 'CHANGE_TEXT',
  ADD_TO_LIST: 'ADD_TO_LIST',
};

// 액션 생성함수
const increase = () => ({
  type: ACTION.INCREASE,
});

const decrease = () => ({
  type: ACTION.DECREASE,
});

const changeText = text => ({
  type: ACTION.CHANGE_TEXT,
  text,
});

const addToList = item => ({
  type: ACTION.ADD_TO_LIST,
  item,
});

// reducer 함수
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case ACTION.DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    case ACTION.CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ACTION.ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat({ id: Date.now(), text: action.item }),
        // ...state,
        // list: [
        //   ...state.list,
        //   {
        //     id: Date.now(),
        //     item: action.item,
        //   },
        // ],
      };
    default:
      return state;
  }
};

// store 만들기
const store = createStore(reducer);
// 현재 store안에 들어있는 상태
// console.log('store.getState() :', store.getState());
// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
  const state = store.getState();
  // console.log('listener: ', state);
};
// 구독 해제하고 싶을 때는 unsubscribe()를 호출
const unsubscribe = store.subscribe(listener);

// 액션들을 디스패치

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('new text'));
store.dispatch({ type: ACTION.ADD_TO_LIST, item: 'hi' });
