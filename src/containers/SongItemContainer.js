import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SongItem from '../components/SongItem';
import Player from '../components/Player';
import { playSong } from '../actions';

const SongItemContainer = ({ songs, player, playSong, match }) => {
  const song = songs.find(song => song.id === Number(match.params.id));
  return (
    <Fragment>
      <SongItem song={song} playing={song.id === player.songId} />
      <Player
        uri={song.uri}
        autoPlay={false}
        onPlay={() => playSong(song.id)}
      />
    </Fragment>
  );
};

SongItemContainer.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired
    })
  ).isRequired,
  player: PropTypes.shape({
    songId: PropTypes.number,
    playing: PropTypes.bool.isRequired
  }),
  playSong: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
};

const mapStateToProps = state => ({
  songs: state.songs,
  player: state.player
});

export default connect(
  mapStateToProps,
  { playSong }
)(SongItemContainer);
