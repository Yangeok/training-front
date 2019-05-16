import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getHomeGrids } from 'store/actions';
import * as types from 'store/constants';
import * as api from 'lib';

export function* fetchHomeGrids(blog) {
  try {
    const data = yield call(api.home, blog);
    yield put(getHomeGrids.success(data));
  } catch (e) {
    yield put(getHomeGrids.failure(e.message));
  }
}

export function* watchFetchHomeGrids() {
  yield takeLatest(types.GET_HOME_GRIDS[types.REQUEST], fetchHomeGrids);
}

export default function* rootHomeGrids() {
  yield all([watchFetchHomeGrids()]);
}
