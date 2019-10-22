import { LOAD_SONGS } from '../constants/ActionTypes';

const songs = (state = [], action) => {
  switch (action.type) {
    case LOAD_SONGS:
      return action.songs;
    default:
      return state;
  }
};

export default songs;
