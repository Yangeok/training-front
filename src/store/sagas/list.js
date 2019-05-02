import { all, fork, call, put, take } from 'redux-saga/effects';
import { getLists } from 'store/actions';
import * as types from 'store/constants';
import * as api from 'lib/getLists';

export function* watchFetchPages() {
  while (true) {
    const { url } = yield take(types.GET_LISTS[types.REQUEST]);
    yield fork(fetchPages, url);
  }
}

export function* fetchPages(url) {
  try {
    const { data } = yield call(api.getLists(url));
    yield put(getLists.success(data));
  } catch (e) {
    yield put(getLists.failure(e.message));
  }
}

export default function*() {
  yield all([fork(watchFetchPages)]);
}
