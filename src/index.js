import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './styles.css';

const actionNewArray = {
  type: 'new_a_array',
  data: [1, 2, 3, 4]
};

const number = {
  min: Math.ceil(1),
  max: Math.floor(100)
};
//
const actionPushNumber = () => ({
  type: 'push_a_number',
  data: Math.floor(Math.random() * (number.max - number.min)) + number.min
});

const reducer = (state = [], action) => {
  if (action.type === 'new_a_array') {
    state = [...state, ...action.data];
  } else if (action.type === 'push_a_number') {
    state = [...state, action.data];
  }
  return state;
};

const store = createStore(reducer);

// store.dispatch(actionNewArray);
// store.dispatch(actionPushNumber());

class App extends Component {
  methodAddNumber() {
    store.dispatch(actionPushNumber());
    console.log('a', store.getState());
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={() => this.methodAddNumber()}>ADD</button>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
