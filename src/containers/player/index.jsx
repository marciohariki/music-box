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


const mapStatetoProps = (state) => {
  const profile = state.user.profile
  if (!profile) {
    return {}
  }
  const { display_name, email, images } = profile
  return {
    profile: {
      name: display_name,
      email: email,
      imageUrl: !!images.length && images[0].url
    }
  }
}

export default connect(mapStatetoProps, null)(Player)
