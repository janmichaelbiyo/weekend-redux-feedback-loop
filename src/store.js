import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

const feeling = (state = 1, action) => {
  if (action.type === 'FEELING_ADD') {
    return action.payload;
  }
  return state;
};

const understanding = (state = 1, action) => {
  if (action.type === 'UNDERSTANDING_ADD') {
    return action.payload;
  }
  return state;
};

const support = (state = 1, action) => {
  if (action.type === 'SUPPORT_ADD') {
    return action.payload;
  }
  return state;
};

const store = createStore(
  combineReducers({
    feeling,
    understanding,
    support,
  }),
  applyMiddleware(logger)
);

export default store;
