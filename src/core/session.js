import storage from './storage';

class Session {
  constructor() {
    this.key = 'session';
    let session = storage.getItem(this.key);
    if (!session) {
      session = {
        accessToken: null
      };
    }
    this.session = session
  }

  get session() {
    return this._session;
  }

  set session(value) {
    this._session = value;
    storage.setItem(this.key, this.session)
  }

  setAccessToken(accessToken) {
    this.session = {
      ...this.session,
      accessToken: accessToken
    };
  }

  getAccessToken() {
    return this.session.accessToken;
  }
}

export default new Session();