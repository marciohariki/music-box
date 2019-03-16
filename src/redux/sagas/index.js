import { fork } from 'redux-saga/effects';
import watchFetchUserProfile from './userProfile';
import watchFetchMusic from './player';

export default function * root () {
  yield fork(watchFetchUserProfile);
  yield fork(watchFetchMusic);
}