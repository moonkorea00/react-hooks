import { combineReducers } from 'redux';
import { counter } from './counter';
import { todos } from './todos';
import { members } from './members';

// 두 개의 리듀셔를 combineReducers() 를 사용하여 rootReducer로 합침
const rootReducer = combineReducers({
  counter,
  todos,
  members,
});

export default rootReducer;
