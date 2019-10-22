import { PLAY_SONG, PAUSE_SONG } from '../constants/ActionTypes';

const initialState = {
  songId: null,
  playing: false
};

const player = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SONG: {
      return {
        songId: action.id,
        playing: true
      };
    }
    case PAUSE_SONG: {
      return initialState;
    }
    default:
      return state;
  }
};

export default player;
