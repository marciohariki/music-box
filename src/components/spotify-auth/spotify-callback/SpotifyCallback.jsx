import React from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../../redux/actions'
import history from '../../../core/history'

class SpotifyCallback extends React.Component {
  componentDidMount () {
    const hash = this.props.location.hash
    const r = /([^&;=]+)=?([^&;]*)/g
    const userAccessToken = r.exec(hash)[2]
    this.props.signIn(userAccessToken)

    history.push('/profile')
  }

  render () {
    return <div>You have signed in. Redirecting to player...</div>
  }
}

export default connect(null, { signIn })(SpotifyCallback)
