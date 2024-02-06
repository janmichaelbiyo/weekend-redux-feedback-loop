import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
// import store from './store';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

const feeling = (state = [], action) => {
  if (action.type === 'FEELING_ADD') {
    return [action.payload];
  }
  return state;
};

const store = createStore(
  combineReducers({
    feeling,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
