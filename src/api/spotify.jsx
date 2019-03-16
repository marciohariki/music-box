import axios from 'axios';
import session from '../core/session';

class SpotifyApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.spotify.com/v1'
    })
  }

  getConfig() {
    return {
      headers: { 'Authorization': `Bearer ${session.getAccessToken()}`}
    }
  }

  get(path) {
    return this.api.get(path, this.getConfig());
  }

  put(path) {
    return this.api.put(path, null, this.getConfig());
  }

  post(path) {
    return this.api.post(path, null, this.getConfig());
  }
}

export default new SpotifyApi();
