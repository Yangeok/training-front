import { all, fork, call, put, take } from 'redux-saga/effects';
import { getLists } from 'store/actions';
import * as types from 'store/constants';
import * as api from 'lib/lists';

export function* fetchLists(url) {
  try {
    const { data } = yield call(api.lists, url);
    yield put(getLists.success(data));
  } catch (e) {
    yield put(getLists.failure(e.message));
  }
}
export function* watchFetchLists() {
  while (true) {
    const { url } = yield take(types.GET_LISTS[types.REQUEST]);
    yield fork(fetchLists, url);
  }
}

export default function*() {
  yield all([fork(watchFetchLists)]);
}
