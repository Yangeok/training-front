import { put, take, all } from 'redux-saga/effects';
import * as api from 'lib/getLists';
import * as types from 'store/constants';
import { getTests } from 'store/actions';

export function* fetchTests(url) {
  yield put({ type: types.GET_TESTS[types.REQUEST] });
  try {
    const { data } = yield api.getLists(url);
    yield put({ type: types.GET_TESTS[types.SUCCESS], data });
    // yield put(getTests.success(data));
  } catch (e) {
    yield put({ type: types.GET_TESTS[types.FAILURE] });
    // yield put(getTests.failure(e));
  }
}

export function* watchFetchTests() {
  yield take(types.GET_TESTS[types.REQUEST], fetchTests);
}

export default function*() {
  yield all(fetchTests);
}
