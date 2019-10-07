import React from 'react'
import { connect } from 'react-redux'

import PlayerStream from '../../components/player/player-stream'
import PlayerControls from '../../components/player/player-controls'
import BaseStructure from 'components/layout/BaseStructure'

class Player extends React.Component {
  render () {
    return (
      <BaseStructure>
        <PlayerStream/>
        <PlayerControls/>
      </BaseStructure>
    )
  }
}

export default connect(null, null)(Player)
