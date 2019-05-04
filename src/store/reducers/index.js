import { combineReducers } from 'redux';
import list from 'store/reducers/list';
import post from 'store/reducers/post';
import test from 'store/reducers/test';

export const rootReducer = combineReducers({
  list,
  post,
  test
});
