import { put, takeLatest, all } from 'redux-saga/effects';
import * as api from 'lib/getLists';
import * as types from 'store/constants';

export function* fetchTests() {
  yield put({ type: types.GET_TESTS[types.REQUEST] });
  try {
    const { data } = yield api.getLists('blog/post/1/100');
    yield put({ type: types.GET_TESTS[types.SUCCESS], data: data });
  } catch (e) {
    yield put({ type: types.GET_TESTS[types.FAILURE] });
  }
}

export function* watchFetchTests() {
  yield takeLatest(types.GET_TESTS[types.REQUEST], fetchTests);
}

export default function*() {
  yield all(fetchTests);
}
