import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import dataMiddleware from 'src/middleware/dataMiddleware';

import oFigReducer from 'src/reducers/oFigReducer';

const enhancers = composeWithDevTools(
  applyMiddleware(
    dataMiddleware,
  ),
);

const store = createStore(
  // reducer
  oFigReducer,
  // enhancer
  enhancers,
);

export default store;
