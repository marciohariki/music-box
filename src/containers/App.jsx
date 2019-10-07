import React from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import SpotifyCallback from 'components/spotify-auth/spotify-callback/SpotifyCallback'
import UserProfile from './profile'
import Player from './player'
import Home from './home'
import history from 'core/history'

const PUBLIC_URL = process.env.PUBLIC_URL

class App extends React.Component {
  render () {
    return (
      <Router basename={PUBLIC_URL} history={history}>
        <div className="ui container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/spotify-callback" component={SpotifyCallback} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/player" component={Player} />
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
