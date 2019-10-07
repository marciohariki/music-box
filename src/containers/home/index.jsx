import React from 'react'

import SpotifyLogin from 'components/spotify-auth/spotify-login'
import BaseStructure from 'components/layout/BaseStructure'

class Home extends React.Component {
  render () {
    return (
      <BaseStructure>
        <SpotifyLogin />
      </BaseStructure>
    )
  }
}


export default Home