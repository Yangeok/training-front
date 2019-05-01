import { combineReducers } from 'redux';
import page from 'store/reducers/page';
import test from 'store/reducers/test';

export const rootReducer = combineReducers({
  page,
  test
});
