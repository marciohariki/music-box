import React from 'react'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import './App.css'

import history from '../core/history'
import SpotifyCallback from 'components/spotify-auth/spotify-callback/SpotifyCallback'
import UserProfile from './profile'
import Player from './player'
import Home from './home'

class App extends React.Component {
  render () {
    return (
      <Router history={history}>
        <div className="ui container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/spotify-callback" component={SpotifyCallback} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/player" component={Player} />
            <Redirect path="/" />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
