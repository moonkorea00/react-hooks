import React from 'react';
import ReactDOM from 'react-dom';
import PersonContext from './contexts/PersonContext';
import './index.css';
import Main from './Main';
import Router from './Router';

ReactDOM.render(
  <React.StrictMode>
    <PersonContext.Provider>
      <Main />
      {/* <Router /> */}
    </PersonContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
