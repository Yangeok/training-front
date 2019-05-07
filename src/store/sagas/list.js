import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getLists } from 'store/actions';
import * as types from 'store/constants';
import * as api from 'lib/lists';

export function* fetchLists({ url }) {
  try {
    const data = yield call(api.lists, url);
    yield put(getLists.success(data));
  } catch (e) {
    yield put(getLists.failure(e.message));
  }
}
export function* watchFetchLists() {
  yield takeLatest(types.GET_LISTS[types.REQUEST], fetchLists);
}

export default function* rootLists() {
  yield all([watchFetchLists()]);
}
