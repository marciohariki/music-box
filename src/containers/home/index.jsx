import React from 'react'

import SpotifyLogin from 'components/spotify-auth/spotify-login'
import BaseStructure from 'components/layout/BaseStructure'
import { connect } from 'react-redux'

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

export default connect(mapStatetoProps, null)(Home)