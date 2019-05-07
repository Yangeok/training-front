import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getPosts } from 'store/actions';
import * as types from 'store/constants';
import * as api from 'lib/posts';

export function* fetchPosts({ url }) {
  try {
    const data = yield call(api.posts, url);
    yield put(getPosts.success(data));
  } catch (e) {
    yield put(getPosts.failure(e.message));
  }
}

export function* watchFetchPosts() {
  yield takeLatest(types.GET_POSTS[types.REQUEST], fetchPosts);
}

export default function* rootPosts() {
  yield all([watchFetchPosts()]);
}
