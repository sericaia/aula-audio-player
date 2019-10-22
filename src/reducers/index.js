import { combineReducers } from 'redux';
import songs from './songs';
import player from './player';

export default combineReducers({
  songs,
  player
});
