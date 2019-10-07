import React from 'react'
import { connect } from 'react-redux'

import { menuProfileSelector } from 'redux/selector/profile'
import { fetchProfile } from 'redux/actions'

import PlayerStream from 'components/player/player-stream'
import PlayerControls from 'components/player/player-controls'
import BaseStructure from 'components/layout/BaseStructure'

class Player extends React.Component {
  componentDidMount () {
    this.props.fetchProfile()
  }

  render () {
    const { profile } = this.props
    return (
      <BaseStructure profile={profile}>
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

const mapDispatchToProps = {
  fetchProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
