import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SongItem from '../components/SongItem';
import Player from '../components/Player';
import { playSong, pauseSong, endSong } from '../actions';
import status from '../constants/playerStatus';

const SongItemContainer = ({
  songs,
  player,
  playSong,
  pauseSong,
  endSong,
  match
}) => {
  const song = songs.find(song => song.id === Number(match.params.id));
  const isPlaying =
    song.id === player.songId && player.status === status.PLAYING;
  return (
    <Fragment>
      <SongItem song={song} isPlaying={isPlaying} />
      <Player
        uri={song.uri}
        autoPlay={false}
        onPlay={() => playSong(song.id)}
        onPause={() => pauseSong()}
        onEnded={() => endSong()}
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
    status: PropTypes.string.isRequired
  }),
  playSong: PropTypes.func.isRequired,
  pauseSong: PropTypes.func.isRequired,
  endSong: PropTypes.func.isRequired,
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
  { playSong, pauseSong, endSong }
)(SongItemContainer);
