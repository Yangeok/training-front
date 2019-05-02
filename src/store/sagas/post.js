import { all, fork, call, put, take } from 'redux-saga/effects';
import { getPosts } from 'store/actions';
import * as types from 'store/constants';
import * as api from 'lib/getPosts';

export function* watchFetchPages() {
  while (true) {
    const { url } = yield take(types.GET_LISTS[types.REQUEST]);
    yield fork(fetchPages, url);
  }
}

export function* fetchPages(url) {
  try {
    const { data } = yield call(api.getPosts(url));
    yield put(getPosts.success(data));
  } catch (e) {
    yield put(getPosts.failure(e.message));
  }
}

export default function*() {
  yield all([fork(watchFetchPages)]);
}
