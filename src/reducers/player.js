import status from '../constants/playerStatus';
import { PLAY_SONG, PAUSE_SONG, END_SONG } from '../constants/ActionTypes';

const initialState = {
  songId: null,
  status: status.NONE
};

const player = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SONG: {
      return {
        songId: action.id,
        status: status.PLAYING
      };
    }
    case PAUSE_SONG: {
      return {
        ...state,
        status: status.PAUSED
      };
    }
    case END_SONG: {
      return initialState;
    }
    default:
      return state;
  }
};

export default player;
