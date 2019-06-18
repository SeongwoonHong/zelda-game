import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from 'reducers/root';

const reduxDevTools = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = reduxDevTools
  ? createStore(rootReducer, compose(reduxDevTools, applyMiddleware(thunk)))
  : createStore(rootReducer, applyMiddleware(thunk));

export default store;
