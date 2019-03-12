import React from 'react';
import { connect } from 'react-redux';

import history from '../../../core/history';

const CLIENT_ID = 'cac2d66ca216494890245183d13e1ca6';

class SpotifyLogin extends React.Component {
  componentDidMount() {
    if (this.props.isSignedIn) {
      history.push('/profile');
    }
  }

  onClick = async () => {
    const scope =  'streaming user-read-birthdate user-read-private user-read-email';
    const redirect_uri = 'http://localhost:3000/spotify-callback';
    let spotifyAuthLocation = `https://accounts.spotify.com/authorize?`;
    spotifyAuthLocation += `response_type=token`;
    spotifyAuthLocation += `&client_id=${ CLIENT_ID }`;
    spotifyAuthLocation += `&scope=${ scope }`;
    spotifyAuthLocation += `&redirect_uri=${ redirect_uri }`;
    window.location = spotifyAuthLocation;
  };

  render() {
    return (
      <button
        className="ui button primary"
        onClick={this.onClick}
      >
        Login with Spotify
      </button>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
};

export default connect(mapStateToProps, null)(SpotifyLogin);