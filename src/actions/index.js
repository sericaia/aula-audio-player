import api from '../api';
import * as types from '../constants/ActionTypes';

export const getAllSongs = () => dispatch => {
  api.getAllSongs(songs => {
    dispatch({
      type: types.LOAD_SONGS,
      songs
    });
  });
};

export const playSong = id => dispatch => {
  dispatch({
    type: types.PLAY_SONG,
    id
  });
};

export const pauseSong = () => dispatch => {
  dispatch({
    type: types.PAUSE_SONG
  });
};
