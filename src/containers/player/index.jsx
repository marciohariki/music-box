import React from 'react'
import { connect } from 'react-redux'

import PlayerStream from '../../components/player/player-stream'
import PlayerControls from '../../components/player/player-controls'
import BaseStructure from 'components/layout/BaseStructure'
import { menuProfileSelector } from '../../redux/selector/profile'

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


const mapStateToProps = (state) => {
  const profile = menuProfileSelector(state)
  return {
    isSignedIn: state.auth.isSignedIn,
    profile
  }
}

export default connect(mapStateToProps, null)(Player)
