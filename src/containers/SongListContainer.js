import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SongList from '../components/SongList';
import SongSummary from '../components/SongSummary';
import Player from '../components/Player';
import { playSong } from '../actions';

const SongListContainer = ({ songs, player, playSong }) => {
  const playingSong = songs.find(song => song.id === player.songId);
  return (
    <SongList title="Songs">
      {songs.map(song => (
        <SongSummary
          key={song.id}
          song={song}
          playSong={playSong}
          playing={song.id === player.songId}
        />
      ))}
      <Player uri={playingSong ? playingSong.uri : null} autoPlay={true} />
    </SongList>
  );
};

SongListContainer.propTypes = {
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
  playSong: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  songs: state.songs,
  player: state.player
});

export default connect(
  mapStateToProps,
  { playSong }
)(SongListContainer);
