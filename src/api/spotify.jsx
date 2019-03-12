import axios from 'axios';
import session from '../core/session';

class SpotifyApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.spotify.com/v1'
    })
  }

  get(path) {
    return this.api.get(path, {
      headers: { 'Authorization': `Bearer ${session.getAccessToken()}`}
    });
  }
}

export default new SpotifyApi();
