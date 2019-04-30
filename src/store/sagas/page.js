import { all, fork, call, put, take } from 'redux-saga/effects';
import { getBlogList } from 'store/actions';
import * as types from 'store/constants';
import * as api from 'lib/getLists';

export function* fetchPages(url) {
  try {
    const { data } = yield call(api.getBlogLists, url);
    yield put(getBlogList.success(data));
  } catch (e) {
    yield put(getBlogList.failure(e.message));
  }
}

export function* watchFetchPages() {
  while (true) {
    const { url } = yield take(types.USER_INDEX[types.REQUEST]);
    yield fork(fetchPages, url);
  }
}

export default function*() {
  yield all([fork(watchFetchPages)]);
}
