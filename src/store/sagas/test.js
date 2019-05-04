import { all, fork, call, put, take, takeLatest } from 'redux-saga/effects';
import { getTests } from 'store/actions';
import * as types from 'store/constants';
import * as api from 'lib/tests';

export function* fetchTests(url) {
  try {
    const data = yield call(api.tests, url);
    yield put(getTests.success(data));
  } catch (e) {
    yield put(getTests.failure(e));
  }
}

export default function* watchFetchTests() {
  yield takeLatest(types.GET_TESTS[types.REQUEST], fetchTests);
}

// export default function*() {
//   yield all([fork(watchFetchTests)]);
// }
