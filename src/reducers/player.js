import status from '../constants/playerStatus';
import { PLAY_SONG, PAUSE_SONG, END_SONG } from '../constants/ActionTypes';

const initialState = {
  songId: null,
  status: status.NONE
};

const player = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SONG: {
      console.log('PLAY_SONG', {
        songId: action.id,
        status: status.PLAYING
      });
      return {
        songId: action.id,
        status: status.PLAYING
      };
    }
    case PAUSE_SONG: {
      console.log('PAUSE_SONG', {
        ...state,
        status: status.PAUSED
      });
      return {
        ...state,
        status: status.PAUSED
      };
    }
    case END_SONG: {
      console.log('END_SONG', initialState);
      return initialState;
    }
    default:
      return state;
  }
};

export default player;
