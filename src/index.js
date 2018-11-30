import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './styles.css';

const actionNewArray = {
  type: 'new_a_array',
  data: [1, 2, 3, 4]
};

const reducer = (state = [], action) => {
  if (action.type === 'new_a_array') {
    state = [...state, action.data];
  }
  return state;
};

const store = createStore(reducer);

store.dispatch(actionNewArray);
console.log(store.getState());

const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
