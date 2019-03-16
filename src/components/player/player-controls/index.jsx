import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import {
  fetchPauseMusic,
  fetchPlayMusic,
  fetchSkipToNextMusic,
  fetchSkipToPreviousMusic
} from '../../../redux/actions';

class PlayerControls extends React.Component {
  onClickSkipToPreviousMusic = () => {
    this.props.fetchSkipToPreviousMusic();
  };

  onClickSkipToNextMusic = () => {
    this.props.fetchSkipToNextMusic();
  };

  onClickPlayMusic = () => {
    this.props.fetchPlayMusic();
  };

  onClickPauseMusic = () => {
    this.props.fetchPauseMusic();
  };

  render() {
    return (
      <div className="ui raised">
        <i onClick={this.onClickSkipToPreviousMusic} className="large middle aligned icon step backward"/>
        <i onClick={this.onClickPlayMusic} className="large middle aligned icon play"/>
        <i onClick={this.onClickPauseMusic} className="large middle aligned icon pause"/>
        <i onClick={this.onClickSkipToNextMusic} className="large middle aligned icon step forward"/>
      </div>
    )
  }
}

PlayerControls.propTypes = {
  fetchPlayMusic: func.isRequired,
  fetchPauseMusic: func.isRequired,
  fetchSkipToNextMusic: func.isRequired,
  fetchSkipToPreviousMusic: func.isRequired,
};

const actionCreators = {
  fetchPlayMusic,
  fetchPauseMusic,
  fetchSkipToNextMusic,
  fetchSkipToPreviousMusic
};

export default connect(null, actionCreators)(PlayerControls);