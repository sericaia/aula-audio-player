import React from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';

const SongItem = ({ song, playing }) => (
  <ListItemText>
    {song.title} {playing ? '(playing song)' : null}
  </ListItemText>
);

SongItem.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired,
  playing: PropTypes.bool.isRequired
};

export default SongItem;
