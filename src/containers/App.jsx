import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'

import history from '../core/history'
import SpotifyLogin from '../components/spotify-auth/spotify-login/SpotifyLogin'
import SpotifyCallback from '../components/spotify-auth/spotify-callback/SpotifyCallback'
import UserProfile from '../components/user/profile'
import Player from './player'

class App extends React.Component {
  render () {
    return (
      <Router history={history}>
        <div className="ui container">
          <Switch>
            <Route path="/" exact component={SpotifyLogin}/>
            <Route path="/spotify-callback" component={SpotifyCallback}/>
            <Route path="/profile" component={UserProfile}/>
            <Route path="/player" component={Player}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
