import React from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';

const Player = ({ uri, autoPlay, onPlay, onPause, onEnded }) => (
  <ReactAudioPlayer
    onPlay={onPlay}
    onPause={onPause}
    onEnded={onEnded}
    src={uri}
    autoPlay={autoPlay}
    controls
  />
);

Player.propTypes = {
  uri: PropTypes.string,
  autoPlay: PropTypes.bool,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnded: PropTypes.func
};
export default Player;
