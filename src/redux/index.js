import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import reactThunk from 'react-thunk';

// 创建 tore 引入 redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reactThunk))
);

export default store;
