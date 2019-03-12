import { all, fork } from 'redux-saga/effects';
import watchFetchUserProfile from './userProfile';
import watchFetchMusic from './player';

export default function * root () {
  yield all([
    fork(watchFetchUserProfile),
    fork(watchFetchMusic)
  ]);
}