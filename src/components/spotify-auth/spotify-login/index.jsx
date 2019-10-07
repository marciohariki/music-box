import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { Redirect } from 'react-router-dom'

const CLIENT_ID = 'cac2d66ca216494890245183d13e1ca6'

class Index extends React.Component {
  onClick = async () => {
    const scope = 'streaming user-read-birthdate user-read-private user-read-email'
    const redirect_uri = 'http://localhost:3000/spotify-callback'
    let spotifyAuthLocation = `https://accounts.spotify.com/authorize?`
    spotifyAuthLocation += `response_type=token`
    spotifyAuthLocation += `&client_id=${CLIENT_ID}`
    spotifyAuthLocation += `&scope=${scope}`
    spotifyAuthLocation += `&redirect_uri=${redirect_uri}`
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
