import React from 'react'
import { connect } from 'react-redux'
import { bool, shape, string } from 'prop-types'
import { fetchProfile } from 'redux/actions'
import { Link, Redirect } from 'react-router-dom'
import BaseStructure from 'components/layout/BaseStructure'
import { menuProfileSelector } from 'redux/selector/profile'

class UserProfile extends React.Component {
  componentDidMount () {
    this.props.fetchProfile()
  }

  renderProfile () {
    const { profile } = this.props
    return (
      <BaseStructure profile={profile}>
        <Link to={'/player'} className='ui button primary'>
          Go to Player
        </Link>
      </BaseStructure>
    )
  }

  render () {
    const { isSignedIn, profile } = this.props

    if (!isSignedIn) {
      return <Redirect to='/' />
    }
    if (!profile) {
      return <div>Loading...</div>
    }

    return this.renderProfile()
  }
}

UserProfile.propTypes = {
  isSignedIn: bool,
  userProfile: shape({
    name: string,
    imgUrl: string
  })
}

UserProfile.defaultProps = {
  isSignedIn: false,
  userProfile: null
}

const mapStateToProps = (state) => {
  const profile = menuProfileSelector(state)
  return {
    isSignedIn: state.auth.isSignedIn,
    profile
  }
}

export default connect(mapStateToProps, { fetchProfile })(UserProfile)
