import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import './App.css';

import history from '../core/history'
import SpotifyCallback from 'components/spotify-auth/spotify-callback/SpotifyCallback'
import UserProfile from 'components/user/profile'
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
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
