import React from 'react'
import { connect } from 'react-redux'
import { signIn } from 'redux/actions'
import { Redirect } from 'react-router-dom'

class SpotifyCallback extends React.Component {
  componentDidMount () {
    const hash = this.props.location.hash
    const r = /([^&;=]+)=?([^&;]*)/g
    const userAccessToken = r.exec(hash)[2]
    this.props.signIn(userAccessToken)
  }

  render () {
    const { isSignedIn } = this.props
    if (isSignedIn) {
      return <Redirect to="/" />
    }

    return <div>You have signed in. Redirecting to player...</div>
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { signIn })(SpotifyCallback)
