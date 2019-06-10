import { combineReducers } from 'redux';
import { player } from './';
import { map } from './';

const appReducer = combineReducers({
  player,
  map,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
