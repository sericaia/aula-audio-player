import React from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';

const SongItem = ({ song, isPlaying }) => (
  <ListItemText>
    {song.title} {isPlaying ? '(playing song)' : null}
  </ListItemText>
);

SongItem.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired,
  isPlaying: PropTypes.bool
};

export default SongItem;
