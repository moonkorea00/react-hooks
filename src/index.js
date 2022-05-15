import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
// 리액트 프로젝트에 리덕스를 적용 할 때에는 react-redux 사용

// create store
const store = createStore(rootReducer);
console.log('STORE', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// create combineReducer
// pass in rootReducer inside createStore()