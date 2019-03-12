import {combineReducers} from 'redux';
import spotifyAuthReducer from './spotifyAuthReducer';
import spotifyProfile from './spotifyProfile';

export default combineReducers({
  auth: spotifyAuthReducer,
  user: spotifyProfile
})