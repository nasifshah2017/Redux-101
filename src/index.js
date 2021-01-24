import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1. In order to wire up a redux/react app we need react-redux.
// We need the Provider Component to be around everything!!
import { Provider } from 'react-redux';

// 2. Create the Redux Store, so that Redux exists and the Provider has a store!!
import { createStore } from 'redux';

// 3. We need Reducers to populate the store!!
// 3a. We always start with a rootReducer. Its more like a manager of all reducers.
// 4. Make individual Reducers to hand to the rootreducer. (3.)
import rootReducer from './reducers/rootReducer';

// 5. Create the store (2.) by passing it the rootReducer, which is made up of the 
// reducers. 
const theStore = createStore(rootReducer);

// Provider is the glue between React and Redux, so give it the store...
ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
