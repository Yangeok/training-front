import { call, put, take, all, fork } from 'redux-saga/effects';
import * as api from 'lib/getLists';
import * as types from 'store/constants';
import { getTests } from 'store/actions';

export function* fetchTests(url) {
  try {
    const data = yield call(api.getLists, url);
    // yield put({ type: types.GET_TESTS[types.SUCCESS], data });
    yield put(getTests.success(data));
  } catch (e) {
    yield put({ type: types.GET_TESTS[types.FAILURE] });
    // yield put(getTests.failure(e));
  }
}

export function* watchFetchTests() {
  while (true) {
    const { url } = yield take(types.GET_TESTS[types.REQUEST]);
    yield fork(fetchTests, url);
  }
}

export default function*() {
  yield all([fork(watchFetchTests)]);
}
