import React from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';

const Player = ({ uri, autoPlay, onPlay }) => (
  <ReactAudioPlayer onPlay={onPlay} src={uri} autoPlay={autoPlay} controls />
);

Player.propTypes = {
  uri: PropTypes.string,
  autoPlay: PropTypes.bool,
  onPlay: PropTypes.func
};
export default Player;
