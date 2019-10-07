import React from 'react'

import SpotifyLogin from 'components/spotify-auth/spotify-login'
import BaseStructure from 'components/layout/BaseStructure'
import { connect } from 'react-redux'
import { menuProfileSelector } from '../../redux/selector/profile'

class Home extends React.Component {
  render () {
    const { profile } = this.props
    return (
      <BaseStructure profile={profile}>
        <SpotifyLogin />
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

export default connect(mapStateToProps, null)(Home)