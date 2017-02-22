// import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
// import reducer from './reducers';
import AppleBasket from './container/AppleBasket';
// import thunk from 'redux-thunk';

// const store = createStore(reducer, applyMiddleware(thunk));

// ReactDOM.render(
//     <Provider>
//       <AppleBasket />
//     </Provider>,
//     document.getElementById('root')
// );
ReactDOM.render(
      <AppleBasket />,
    document.getElementById('root')
);
