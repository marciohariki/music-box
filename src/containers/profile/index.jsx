import React from 'react'
import { connect } from 'react-redux'
import { arrayOf, bool, number, shape, string } from 'prop-types'
import { fetchProfile } from 'redux/actions'
import history from 'core/history'
import { Link } from 'react-router-dom'
import BaseStructure from '../../components/layout/BaseStructure'

class UserProfile extends React.Component {
  componentDidMount () {
    this.props.fetchProfile()
  }

  renderProfile () {
    const userProfile = this.props.userProfile
    const userImage = userProfile.images[0]
    return (
      <BaseStructure profile={userProfile}>
        <div className="ui card">
          <div className="image">
            <img alt={userProfile.display_name} src={userImage.url}/>
          </div>
          <div className="content">
            <p className="header">{userProfile.display_name}</p>
            <div className="meta">
              <span className="email">{userProfile.email}</span>
            </div>
            <div className="description">
              Has {userProfile.followers.total} followers
            </div>
          </div>
          <Link to={'/player'} className='ui button primary'>
            Go to Player
          </Link>
        </div>
      </BaseStructure>
    )
  }

  render () {
    if (!this.props.isSignedIn) {
      history.push('/')
      return <div>Redirecting</div>
    }
    if (!this.props.userProfile) {
      return <div>Loading...</div>
    }

    return this.renderProfile()
  }
}

UserProfile.propTypes = {
  isSignedIn: bool,
  userProfile: shape({
    birthdate: string,
    country: string,
    display_name: string,
    email: string,
    followers: shape({
      href: string,
      total: number
    }),
    images: arrayOf(shape({
      height: number,
      url: string
    }))
  })
}

UserProfile.defaultProps = {
  isSignedIn: false,
  userProfile: null
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userProfile: state.user.profile
  }
}

export default connect(mapStateToProps, { fetchProfile })(UserProfile)
