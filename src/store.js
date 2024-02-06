import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

const feeling = (state = [], action) => {
  if (action.type === 'FEELING_ADD') {
    return [...state, action.payload];
  }
  return state;
};

const store = createStore(
  combineReducers({
    feeling,
  }),
  applyMiddleware(logger)
);

export default store;
