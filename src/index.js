// import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import AppleBasket from './container/AppleBasket';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <AppleBasket />
  </Provider>,
  document.getElementById('root')
);
