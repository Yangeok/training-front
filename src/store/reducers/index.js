import { combineReducers } from 'redux';
import list from 'store/reducers/list';
import post from 'store/reducers/post';

export const rootReducer = combineReducers({
  list,
  post
});
