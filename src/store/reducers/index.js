import { combineReducers } from 'redux';
import list from 'store/reducers/list';
import post from 'store/reducers/post';
import home from 'store/reducers/home';

export const rootReducer = combineReducers({
  list,
  post,
  home
});
