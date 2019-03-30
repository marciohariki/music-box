import { call, fork, put, takeLatest } from 'redux-saga/effects'

import spotify from '../../api/spotify'
import {
  FETCH_PAUSE_MUSIC,
  FETCH_PLAY_MUSIC,
  FETCH_SKIP_TO_NEXT_MUSIC,
  FETCH_SKIP_TO_PREVIOUS_MUSIC
} from '../actions/types'
import { loadPauseMusic, loadPlayMusic, loadSkipToNextMusic, loadSkipToPreviousMusic } from '../actions'

const fetchPlayMusic = async () => {
  const response = await spotify.put('/me/player/play')
  return response.data
}

function * playMusicFetchSaga () {
  try {
    yield call(fetchPlayMusic)
    yield put(loadPlayMusic())
  } catch (e) {
    yield call((e) => console.log(`error is ${e}`), e)
  }
}

function * watchFetchPlayMusic () {
  yield takeLatest(FETCH_PLAY_MUSIC, playMusicFetchSaga)
}

const fetchPauseMusic = async () => {
  const response = await spotify.put('/me/player/pause')
  return response.data
}

function * pauseMusicFetchSaga () {
  try {
    yield call(fetchPauseMusic)
    yield put(loadPauseMusic())
  } catch (e) {
    yield call((e) => console.log(e), e)
  }
}

function * watchFetchPauseMusic () {
  yield takeLatest(FETCH_PAUSE_MUSIC, pauseMusicFetchSaga)
}

const fetchSkipToNextMusic = async () => {
  const response = await spotify.post('/me/player/next')
  return response.data
}

function * skipToNextMusicFetchSaga () {
  try {
    yield call(fetchSkipToNextMusic)
    yield put(loadSkipToNextMusic())
  } catch (e) {
    yield call((e) => console.log(e), e)
  }
}

function * watchFetchSkipToNextMusic () {
  yield takeLatest(FETCH_SKIP_TO_NEXT_MUSIC, skipToNextMusicFetchSaga)
}

const fetchSkipToPreviousMusic = async () => {
  const response = await spotify.post('/me/player/previous')
  return response.data
}

function * skipToPreviousMusicFetchSaga () {
  try {
    yield call(fetchSkipToPreviousMusic)
    yield put(loadSkipToPreviousMusic())
  } catch (e) {
    yield call((e) => console.log(e), e)
  }
}

function * watchFetchSkipToPreviousMusic () {
  yield takeLatest(FETCH_SKIP_TO_PREVIOUS_MUSIC, skipToPreviousMusicFetchSaga)
}

export default function * watchFetchMusic () {
  yield fork(watchFetchPlayMusic)
  yield fork(watchFetchPauseMusic)
  yield fork(watchFetchSkipToNextMusic)
  yield fork(watchFetchSkipToPreviousMusic)
}
