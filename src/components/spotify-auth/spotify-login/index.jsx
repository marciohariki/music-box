import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { Redirect } from 'react-router-dom'

const CLIENT_ID = 'cac2d66ca216494890245183d13e1ca6'
const REDIRECT_URL = process.env.NODE_ENV === 'production'
  ? 'https://marciohariki.github.io/music-box/spotify-callback'
  : 'http://localhost:3000/spotify-callback'

class Index extends React.Component {
  onClick = async () => {
    const scope = 'streaming user-read-birthdate user-read-private user-read-email'
    let spotifyAuthLocation = `https://accounts.spotify.com/authorize?`
    console.log(REDIRECT_URL)
    spotifyAuthLocation += `response_type=token`
    spotifyAuthLocation += `&client_id=${CLIENT_ID}`
    spotifyAuthLocation += `&scope=${scope}`
    spotifyAuthLocation += `&redirect_uri=${REDIRECT_URL}`
    window.location = spotifyAuthLocation
  }

  render () {
    if (this.props.isSignedIn) {
      return <Redirect to='/profile' />
    }

    return (
      <Button
        type='primary'
        onClick={this.onClick}
      >
        Login with Spotify
      </Button>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, null)(Index)
