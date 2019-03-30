import { call, put, takeLatest } from 'redux-saga/effects'

import spotify from '../../api/spotify'
import { FETCH_PROFILE } from '../actions/types'
import { loadProfile } from '../actions'

const fetchUserProfile = async () => {
  const response = await spotify.get('/me')
  return response.data
}

function * userProfileFetchSaga () {
  try {
    const data = yield call(fetchUserProfile)
    yield put(loadProfile(data))
  } catch (e) {
    yield call((e) => console.log(e), e)
  }
}

export default function * watchFetchUserProfile () {
  yield takeLatest(FETCH_PROFILE, userProfileFetchSaga)
}
