import { createStore, applyMiddleware, compose } from 'redux';

import AsyncFunctionMiddleware from './middleware/AsyncFunctionMiddleware';
import WebSocketMiddleware from './middleware/WebSocketMiddleware';
import rootReducer from '../reducers/index';
import { StoreState } from '../types/index'


const store = createStore<StoreState, any, any, any>(
  rootReducer,
  compose(
    applyMiddleware((AsyncFunctionMiddleware as any)),
    applyMiddleware(WebSocketMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
