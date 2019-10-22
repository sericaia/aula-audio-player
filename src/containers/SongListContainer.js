import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SongList from '../components/SongList';
import SongSummary from '../components/SongSummary';
import Player from '../components/Player';
import { playSong, pauseSong, endSong } from '../actions';
import status from '../constants/playerStatus';

const SongListContainer = ({ songs, player, playSong, pauseSong, endSong }) => {
  const playingSong = songs.find(song => song.id === player.songId);

  const resumeSong = () => {
    if (player.status !== status.PAUSED) {
      return;
    }
    playSong(player.songId);
  };

  return (
    <SongList title="Songs">
      {songs.map(song => {
        const isPlaying =
          song.id === player.songId && player.status === status.PLAYING;
        return (
          <SongSummary
            key={song.id}
            song={song}
            playSong={playSong}
            isPlaying={isPlaying}
          />
        );
      })}
      <Player
        uri={playingSong ? playingSong.uri : null}
        autoPlay={true}
        onPlay={resumeSong}
        onPause={() => pauseSong()}
        onEnded={() => endSong()}
      />
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
    status: PropTypes.string.isRequired
  }),
  playSong: PropTypes.func.isRequired,
  pauseSong: PropTypes.func.isRequired,
  endSong: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  songs: state.songs,
  player: state.player
});

export default connect(
  mapStateToProps,
  { playSong, pauseSong, endSong }
)(SongListContainer);
