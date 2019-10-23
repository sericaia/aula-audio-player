import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListItem, Button } from '@material-ui/core';
import SongItem from './SongItem';

const SongSummary = ({ song, isPlaying, playSong }) => (
  <ListItem>
    <SongItem song={song} isPlaying={isPlaying} />
    <Button
      variant="contained"
      color="primary"
      onClick={() => playSong(song.id)}
    >
      Play
    </Button>
    <Link to={`/songs/${song.id}`}>
      <Button variant="contained">Detail</Button>
    </Link>
  </ListItem>
);

SongSummary.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  isPlaying: PropTypes.bool,
  playSong: PropTypes.func.isRequired
};

export default SongSummary;
