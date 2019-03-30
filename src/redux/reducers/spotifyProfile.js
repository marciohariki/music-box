import { LOAD_PROFILE } from '../actions/types'

const INITIAL_STATE = {
  profile: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_PROFILE:
      return {
        profile: action.payload
      }
    default:
      return state
  }
};
