import { SIGN_IN, SIGN_OUT } from '../actions/types';
import session from '../../core/session';

const INITIAL_STATE = {
  isSignedIn: !!session.getAccessToken(),
  accessToken: session.getAccessToken()
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      session.setAccessToken(action.payload);
      return {
        isSignedIn: true,
        accessToken: action.payload
      };
    case SIGN_OUT:
      session.setAccessToken(null);
      return {
        isSignedIn: false,
        accessToken: null
      };
    default:
      return state;
  }
};