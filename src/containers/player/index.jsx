import React from 'react';
import { connect } from 'react-redux';

import PlayerStream from '../../components/player/player-stream';
import PlayerControls from '../../components/player/player-controls';

class Player extends React.Component {
  render() {
    return (
      <div>
        <PlayerStream/>
        <PlayerControls/>
      </div>
    )
  }
}

export default connect(null, null)(Player)