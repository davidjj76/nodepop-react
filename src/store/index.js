import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import * as api from '../api';
import * as reducers from './reducers';

const configureStore = ({ preloadedState, history }) => {
  const middleware = [thunk.withExtraArgument({ api, history })];

  return createStore(
    combineReducers(reducers),
    preloadedState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
};

export default configureStore;
