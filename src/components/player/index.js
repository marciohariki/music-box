import React from 'react';
import { connect } from 'react-redux';

class Player extends React.Component {
  constructor(props) {
    super(props);
    /* create the variable */
    this.playerCheckInterval = setInterval(() => this.initPlayer(), 1000);
  }

  initPlayer() {
    if (window.Spotify != null) {
      const token = this.props.accessToken;
      this.player = new window.Spotify.Player({
        name: "Musikiki Player",
        getOAuthToken: cb => {
          cb(token);
        },
      });
      this.player.connect();
      clearInterval(this.playerCheckInterval);
      console.log('Player Initialized');
    }
  }

  render() {
    return <div>Player</div>
  }
}

const mapStateToProps = state => {
  return {
    accessToken: state.auth.accessToken
  }
};

export default connect(mapStateToProps, null)(Player);