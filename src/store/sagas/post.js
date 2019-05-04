import { all, fork, call, put, take } from 'redux-saga/effects';
import { getPosts } from 'store/actions';
import * as types from 'store/constants';
import * as api from 'lib/posts';

export function* fetchPosts(url) {
  try {
    const { data } = yield call(api.posts, url);
    yield put(getPosts.success(data));
  } catch (e) {
    yield put(getPosts.failure(e.message));
  }
}

export function* watchFetchPosts() {
  while (true) {
    const { url } = yield take(types.GET_LISTS[types.REQUEST]);
    yield fork(fetchPosts, url);
  }
}

export default function*() {
  yield all([fork(watchFetchPosts)]);
}
