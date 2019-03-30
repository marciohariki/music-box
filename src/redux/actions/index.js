import {
  FETCH_PAUSE_MUSIC,
  FETCH_PLAY_MUSIC,
  FETCH_PROFILE,
  FETCH_SKIP_TO_NEXT_MUSIC,
  FETCH_SKIP_TO_PREVIOUS_MUSIC,
  LOAD_PAUSE_MUSIC,
  LOAD_PLAY_MUSIC,
  LOAD_PROFILE,
  LOAD_SKIP_TO_NEXT_MUSIC,
  LOAD_SKIP_TO_PREVIOUS_MUSIC,
  SIGN_IN,
  SIGN_OUT
} from './types'

export const signIn = (accessToken) => {
  return {
    type: SIGN_IN,
    payload: accessToken
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const fetchProfile = (payload) => {
  return {
    type: FETCH_PROFILE,
    payload: payload
  }
}

export const loadProfile = (payload) => {
  return {
    type: LOAD_PROFILE,
    payload: payload
  }
}

export const fetchPlayMusic = () => {
  return {
    type: FETCH_PLAY_MUSIC
  }
}

export const loadPlayMusic = () => {
  return {
    type: LOAD_PLAY_MUSIC
  }
}

export const fetchPauseMusic = () => {
  return {
    type: FETCH_PAUSE_MUSIC
  }
}

export const loadPauseMusic = () => {
  return {
    type: LOAD_PAUSE_MUSIC
  }
}

export const fetchSkipToNextMusic = () => {
  return {
    type: FETCH_SKIP_TO_NEXT_MUSIC
  }
}

export const loadSkipToNextMusic = () => {
  return {
    type: LOAD_SKIP_TO_NEXT_MUSIC
  }
}

export const fetchSkipToPreviousMusic = () => {
  return {
    type: FETCH_SKIP_TO_PREVIOUS_MUSIC
  }
}

export const loadSkipToPreviousMusic = () => {
  return {
    type: LOAD_SKIP_TO_PREVIOUS_MUSIC
  }
}
